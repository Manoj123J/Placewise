def get_eligibility_explanation(student_profile: dict, jd_text: str) -> str:
    """
    Placeholder service to determine student placement eligibility based on job description.
    Will be integrated with Anthropic Claude API in the future.
    """
    # Simple mock heuristic
    cgpa = student_profile.get("cgpa", 0.0)
    skills = student_profile.get("skills", "").lower()
    
    # Check if student meets some basic criteria
    if cgpa < 6.0:
        return (
            f"Based on our analysis, the student '{student_profile.get('name')}' is currently ineligible. "
            f"The CGPA ({cgpa}) falls below the minimum industry standard threshold of 6.0. "
            f"We suggest focusing on academic core structures to raise CGPA before the placement season."
        )
    
    # Check if skills align with some keywords in jd
    jd_lower = jd_text.lower()
    matched_skills = [s.strip() for s in skills.split(",") if s.strip() and s.strip() in jd_lower]
    
    if len(matched_skills) >= 2:
        return (
            f"The candidate is highly eligible! They demonstrate key skills required for the role, "
            f"specifically in: {', '.join(matched_skills)}. "
            f"With a solid CGPA of {cgpa}, they are in a great position. "
            f"We recommend revising advanced problem-solving patterns in these domains."
        )
    else:
        return (
            f"The candidate is at risk. While their CGPA of {cgpa} is acceptable, "
            f"they do not meet the core skill requirements listed in the job description. "
            f"Target skills to acquire include: React, Node.js, Python, or SQL, depending on the role requirements."
        )

def generate_skill_roadmap(current_skills: str, target_skills: str) -> list:
    """
    Placeholder service to generate an step-by-step roadmap to bridge skills gaps.
    Will be integrated with Anthropic Claude API in the future.
    """
    # Simple mock steps
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
        "description": "Ensure strong foundations in core coding syntax, data structures, and basic object-oriented principles.",
        "status": "completed"
    })
    
    # Step 2: Bridge first gap
    roadmap.append({
        "step": 2,
        "title": f"Master {missing_skills[0].title()}",
        "description": f"Learn intermediate and advanced patterns. Complete 10-15 coding exercises and build a mini-project in {missing_skills[0]}.",
        "status": "in_progress"
    })
    
    # Step 3: Bridge subsequent gaps
    next_skill = missing_skills[1] if len(missing_skills) > 1 else "Mock HR & Technical Screenings"
    roadmap.append({
        "step": 3,
        "title": f"Integrate {next_skill.title()} into Projects",
        "description": f"Build a comprehensive portfolio application incorporating database storage, API integrations, and {next_skill}.",
        "status": "locked"
    })
    
    # Step 4: Final Prep
    roadmap.append({
        "step": 4,
        "title": "Placement Simulation & Behavioral Round",
        "description": "Simulate a live career screening, align resume layout, and practice standard behavioral and STAR method interview questions.",
        "status": "locked"
    })
    
    return roadmap
