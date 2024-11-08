const employees = [
  {
    "id": 1,
    "firstName": "Aniket",
    "email": "b.c114303@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Initialize Project Repository",
        "description": "Complete the project setup and initialize the repository.",
        "taskDate": "2024-10-26",
        "category": "Setup",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Develop Login Module",
        "description": "Create the login functionality for user authentication.",
        "taskDate": "2024-10-27",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Code Review Preparation",
        "description": "Attend the code review session to discuss recent changes.",
        "taskDate": "2024-10-28",
        "category": "Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Mansi",
    "email": "patilmansi908@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Draft Technical Documentation",
        "description": "Write technical documentation for the API services.",
        "taskDate": "2024-10-26",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Fix Payment Gateway Bug",
        "description": "Resolve the bug affecting the payment gateway integration.",
        "taskDate": "2024-10-27",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Update API Endpoints",
        "description": "Ensure all API endpoints are up-to-date.",
        "taskDate": "2024-10-28",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Varun",
    "email": "varunbehere@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update Server Dependencies",
        "description": "Ensure all server dependencies are up-to-date.",
        "taskDate": "2024-10-26",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Design New UI Layout",
        "description": "Create a new user interface design for the dashboard.",
        "taskDate": "2024-10-27",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Backend API Integration",
        "description": "Integrate the backend APIs with the front-end modules.",
        "taskDate": "2024-10-28",
        "category": "Integration",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Anjali",
    "email": "akd@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Project Presentation",
        "description": "Create slides and prepare for the project presentation.",
        "taskDate": "2024-10-26",
        "category": "Preparation",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Update Database Schema",
        "description": "Apply necessary changes to the database schema.",
        "taskDate": "2024-10-27",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Optimize Code Performance",
        "description": "Refactor code to improve performance and efficiency.",
        "taskDate": "2024-10-28",
        "category": "Optimization",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Rutvij",
    "email": "rutvijmahale@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Conduct User Interviews",
        "description": "Interview users to gather feedback on the new feature.",
        "taskDate": "2024-10-26",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Compile Feedback Report",
        "description": "Analyze user feedback and compile a report.",
        "taskDate": "2024-10-27",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Review User Feedback",
        "description": "Discuss feedback with the team and strategize improvements.",
        "taskDate": "2024-10-28",
        "category": "Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  // New Users
  {
    "id": 6,
    "firstName": "Amol",
    "email": "amol@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create User Interface Mockups",
        "description": "Design mockups for the user interface.",
        "taskDate": "2024-10-29",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Conduct Usability Testing",
        "description": "Test the user interface with potential users and gather feedback.",
        "taskDate": "2024-11-01",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Implement Design Changes",
        "description": "Make design changes based on feedback from usability testing.",
        "taskDate": "2024-11-02",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 7,
    "firstName": "Gautam",
    "email": "gautam@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Implement API Security",
        "description": "Ensure that API endpoints are secured against unauthorized access.",
        "taskDate": "2024-10-30",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Prepare Release Notes",
        "description": "Document the changes and features for the next release.",
        "taskDate": "2024-11-01",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Conduct Code Walkthrough",
        "description": "Guide team members through the recent code changes.",
        "taskDate": "2024-11-02",
        "category": "Review",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 8,
    "firstName": "Gaurav",
    "email": "gaurav@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Setup Development Environment",
        "description": "Configure the local development environment for new team members.",
        "taskDate": "2024-10-29",
        "category": "Setup",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "high"
      },
      {
        "taskTitle": "Write Unit Tests",
        "description": "Develop unit tests for the new features implemented in the application.",
        "taskDate": "2024-11-01",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "priority": "medium"
      },
      {
        "taskTitle": "Optimize Database Queries",
        "description": "Review and optimize database queries for better performance.",
        "taskDate": "2024-11-02",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "priority": "low"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "aniket",
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStroage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStroage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin }
}


