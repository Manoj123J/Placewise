import os
import json
import logging
from dotenv import load_dotenv
import anthropic

# Setup logging
logger = logging.getLogger(__name__)

load_dotenv()

# Initialize the Anthropic API client
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
client = None

if ANTHROPIC_API_KEY and ANTHROPIC_API_KEY != "your_key_here":
    try:
        client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    except Exception as e:
        logger.error(f"Failed to initialize Anthropic client: {e}")
else:
    logger.warning("ANTHROPIC_API_KEY is not configured or is the default placeholder. Falling back to rule-based mock logic.")

def get_eligibility_explanation(student_profile: dict, jd_text: str) -> str:
    """
    Determine student placement eligibility based on job description using Anthropic Claude.
    Falls back to a local heuristic explanation if the API is unavailable.
    
    Args:
        student_profile (dict): A dictionary containing student details:
            - name (str)
            - cgpa (float)
            - skills (str)
            - projects (str)
        jd_text (str): The full job description text.
        
    Returns:
        str: A clear text explanation of eligibility, matched skills, and gaps.
    """
    # 1. API Flow
    if client:
        try:
            prompt = (
                f"You are an expert AI Career Coach and Recruiter. Assess the student's placement eligibility "
                f"for the job based on their academic and skill profile compared to the job description.\n\n"
                f"Student Profile:\n"
                f"- Name: {student_profile.get('name')}\n"
                f"- CGPA: {student_profile.get('cgpa')}\n"
                f"- Skills: {student_profile.get('skills')}\n"
                f"- Projects: {student_profile.get('projects')}\n\n"
                f"Job Description:\n"
                f"{jd_text}\n\n"
                f"Your assessment MUST begin or clearly contain a summary sentence indicating if the student is ready/eligible. "
                f"Specifically, use one of these exact phrases in your assessment:\n"
                f"- 'The candidate is highly eligible' or 'The candidate is ready' (if their CGPA is >= 6.0 and they have a strong skills match)\n"
                f"- 'The candidate is not ready' or 'The candidate is not eligible' (if their CGPA is < 6.0 or they have significant skill gaps)\n\n"
                f"Provide a clear, readable explanation of eligibility, matched skills, and gaps in plain readable text."
            )
            
            response = client.messages.create(
                model="claude-3-5-sonnet-20240620",
                max_tokens=1000,
                temperature=0.0,
                messages=[
                    {"role": "user", "content": prompt}
                ]
            )
            explanation = response.content[0].text.strip()
            return explanation
        except Exception as e:
            logger.error(f"Anthropic API call failed in get_eligibility_explanation: {e}")
            
    # 2. Local Fallback Flow (matches mock heuristic)
    cgpa = student_profile.get("cgpa", 0.0)
    skills = student_profile.get("skills", "").lower()
    
    if cgpa < 6.0:
        return (
            f"The candidate is not ready. Based on our analysis, the student '{student_profile.get('name')}' is currently ineligible. "
            f"The CGPA ({cgpa}) falls below the minimum industry standard threshold of 6.0. "
            f"We suggest focusing on academic core structures to raise CGPA before the placement season. (API Fallback)"
        )
    
    jd_lower = jd_text.lower()
    matched_skills = [s.strip() for s in skills.split(",") if s.strip() and s.strip() in jd_lower]
    
    if len(matched_skills) >= 2:
        return (
            f"The candidate is highly eligible! They demonstrate key skills required for the role, "
            f"specifically in: {', '.join(matched_skills)}. "
            f"With a solid CGPA of {cgpa}, they are in a great position. "
            f"We recommend revising advanced problem-solving patterns in these domains. (API Fallback)"
        )
    else:
        return (
            f"The candidate is not ready. While their CGPA of {cgpa} is acceptable, "
            f"they do not meet the core skill requirements listed in the job description. "
            f"Target skills to acquire include: React, Node.js, Python, or SQL, depending on the role requirements. (API Fallback)"
        )

def generate_skill_roadmap(current_skills: str, target_skills: str) -> list:
    """
    Generate a step-by-step roadmap to bridge skills gaps using Anthropic Claude.
    Falls back to a structured default list if the API is unavailable or returns invalid data.
    
    Args:
        current_skills (str): Comma-separated list of student's current skills.
        target_skills (str): Comma-separated list of student's target skills.
        
    Returns:
        list: A list of 4 dictionaries containing steps: step, title, description, status.
    """
    # 1. API Flow
    if client:
        try:
            prompt = (
                f"You are a tech career roadmap assistant. The user wants to transition from their current skills to target skills.\n\n"
                f"Current Skills: {current_skills}\n"
                f"Target Skills: {target_skills}\n\n"
                f"Generate a step-by-step roadmap to bridge the skill gaps. Return exactly 4 ordered steps.\n"
                f"The output MUST be a valid JSON array of objects, with no extra text, no markdown formatting, and no code blocks. Just the raw JSON.\n"
                f"Each object in the array must have the following keys:\n"
                f"- 'step': integer (1, 2, 3, or 4)\n"
                f"- 'title': string (a short title for the step)\n"
                f"- 'description': string (a detailed description of what to do)\n"
                f"- 'status': string (set to 'completed' for step 1, 'in_progress' for step 2, 'locked' for step 3, and 'locked' for step 4)\n\n"
                f"Example structure:\n"
                f"[\n"
                f"  {{\n"
                f"    \"step\": 1,\n"
                f"    \"title\": \"Example Title\",\n"
                f"    \"description\": \"Example Description\",\n"
                f"    \"status\": \"completed\"\n"
                f"  }},\n"
                f"  ...\n"
                f"]"
            )
            
            response = client.messages.create(
                model="claude-3-5-sonnet-20240620",
                max_tokens=1500,
                temperature=0.0,
                messages=[
                    {"role": "user", "content": prompt}
                ]
            )
            
            raw_text = response.content[0].text.strip()
            # Clean codeblock wrappers if Claude outputs markdown
            if raw_text.startswith("```"):
                lines = raw_text.splitlines()
                if lines[0].startswith("```"):
                    lines = lines[1:]
                if lines[-1].startswith("```"):
                    lines = lines[:-1]
                raw_text = "\n".join(lines).strip()
            
            roadmap = json.loads(raw_text)
            
            # Basic validation of the parsed response
            if isinstance(roadmap, list) and len(roadmap) == 4:
                statuses = ["completed", "in_progress", "locked", "locked"]
                for i, step in enumerate(roadmap):
                    step["step"] = i + 1
                    step["status"] = statuses[i]
                    if "title" not in step or "description" not in step:
                        raise ValueError("Missing required keys in step dictionary")
                return roadmap
            else:
                raise ValueError("Roadmap must be a list of 4 steps")
                
        except Exception as e:
            logger.error(f"Failed to generate skill roadmap via Anthropic API: {e}")
            
    # 2. Local Fallback Flow (matches mock steps)
    curr_list = [s.strip().lower() for s in current_skills.split(",") if s.strip()]
    targ_list = [s.strip().lower() for s in target_skills.split(",") if s.strip()]
    
    missing_skills = [s for s in targ_list if s not in curr_list]
    if not missing_skills:
        missing_skills = ["Advanced System Design", "Mock Interview Prep", "Behavioral Alignment"]
        
    roadmap = []
    
    # Step 1: Basics/Foundation
    roadmap.append({
        "step": 1,
        "title": f"Revise Core Fundamentals in {', '.join(curr_list[:2]) if curr_list else 'Programming'}",
        "description": "Ensure strong foundations in core coding syntax, data structures, and basic object-oriented principles. (API Fallback)",
        "status": "completed"
    })
    
    # Step 2: Bridge first gap
    roadmap.append({
        "step": 2,
        "title": f"Master {missing_skills[0].title()}",
        "description": f"Learn intermediate and advanced patterns. Complete 10-15 coding exercises and build a mini-project in {missing_skills[0]}. (API Fallback)",
        "status": "in_progress"
    })
    
    # Step 3: Bridge subsequent gaps
    next_skill = missing_skills[1] if len(missing_skills) > 1 else "Mock HR & Technical Screenings"
    roadmap.append({
        "step": 3,
        "title": f"Integrate {next_skill.title()} into Projects",
        "description": f"Build a comprehensive portfolio application incorporating database storage, API integrations, and {next_skill}. (API Fallback)",
        "status": "locked"
    })
    
    # Step 4: Final Prep
    roadmap.append({
        "step": 4,
        "title": "Placement Simulation & Behavioral Round",
        "description": "Simulate a live career screening, align resume layout, and practice standard behavioral and STAR method interview questions. (API Fallback)",
        "status": "locked"
    })
    
    return roadmap

