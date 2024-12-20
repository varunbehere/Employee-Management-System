const employees = [
  {
    id: 1,
    firstName: "Aniket",
    email: "b.c114303@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11111,
        taskTitle: "Initialize Project Repository",
        taskDescription:
          "Complete the project setup and initialize the repository.",
        taskDate: "2024-10-26",
        category: "Setup",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11112,
        taskTitle: "Develop Login Module",
        taskDescription:
          "Create the login functionality for user authentication.",
        taskDate: "2024-10-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11113,
        taskTitle: "Code Review Preparation",
        taskDescription:
          "Attend the code review session to discuss recent changes.",
        taskDate: "2024-10-28",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Mansi",
    email: "patilmansi908@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11114,
        taskTitle: "Draft Technical Documentation",
        taskDescription: "Write technical documentation for the API services.",
        taskDate: "2024-10-26",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11115,
        taskTitle: "Fix Payment Gateway Bug",
        taskDescription:
          "Resolve the bug affecting the payment gateway integration.",
        taskDate: "2024-10-27",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11116,
        taskTitle: "Update API Endpoints",
        taskDescription: "Ensure all API endpoints are up-to-date.",
        taskDate: "2024-10-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Varun",
    email: "varunbehere@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11117,
        taskTitle: "Draft Technical Documentation",
        taskDescription: "Write technical documentation for the API services.",
        taskDate: "2024-10-26",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11118,
        taskTitle: "Fix Payment Gateway Bug",
        taskDescription:
          "Resolve the bug affecting the payment gateway integration.",
        taskDate: "2024-10-27",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11119,
        taskTitle: "Update API Endpoints",
        taskDescription: "Ensure all API endpoints are up-to-date.",
        taskDate: "2024-10-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Anjali",
    email: "akd@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11120,
        taskTitle: "Prepare Project Presentation",
        taskDescription:
          "Create slides and prepare for the project presentation.",
        taskDate: "2024-10-26",
        category: "Preparation",
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11121,
        taskTitle: "Update Database Schema",
        taskDescription: "Apply necessary changes to the database schema.",
        taskDate: "2024-10-27",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11122,
        taskTitle: "Optimize Code Performance",
        taskDescription: "Refactor code to improve performance and efficiency.",
        taskDate: "2024-10-28",
        category: "Optimization",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Rutvij",
    email: "rutvijmahale@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11123,
        taskTitle: "Conduct User Interviews",
        taskDescription:
          "Interview users to gather feedback on the new feature.",
        taskDate: "2024-10-26",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11124,
        taskTitle: "Compile Feedback Report",
        taskDescription: "Analyze user feedback and compile a report.",
        taskDate: "2024-10-27",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11125,
        taskTitle: "Review User Feedback",
        taskDescription:
          "Discuss feedback with the team and strategize improvements.",
        taskDate: "2024-10-28",
        category: "Review",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 6,
    firstName: "Amol",
    email: "amol@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11126,
        taskTitle: "Create User Interface Mockups",
        taskDescription: "Design mockups for the user interface.",
        taskDate: "2024-10-29",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11127,
        taskTitle: "Conduct Usability Testing",
        taskDescription:
          "Test the user interface with potential users and gather feedback.",
        taskDate: "2024-11-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11128,
        taskTitle: "Implement Design Changes",
        taskDescription:
          "Make design changes based on feedback from usability testing.",
        taskDate: "2024-11-02",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 7,
    firstName: "Gautam",
    email: "gautam@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11129,
        taskTitle: "Implement API Security",
        taskDescription:
          "Ensure that API endpoints are secured against unauthorized access.",
        taskDate: "2024-10-30",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11130,
        taskTitle: "Prepare Release Notes",
        taskDescription:
          "Document the changes and features for the next release.",
        taskDate: "2024-11-01",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11131,
        taskTitle: "Conduct Code Walkthrough",
        taskDescription: "Guide team members through the recent code changes.",
        taskDate: "2024-11-02",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 8,
    firstName: "Gaurav",
    email: "gaurav@gmail.com",
    password: "123",
    tasks: [
      {
        taskId: 11132,
        taskTitle: "Setup Development Environment",
        taskDescription:
          "Configure the local development environment for new team members.",
        taskDate: "2024-10-29",
        category: "Setup",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "high",
        isFeatured: false,
      },
      {
        taskId: 11133,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Develop unit tests for the new features implemented in the application.",
        taskDate: "2024-11-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        priority: "medium",
        isFeatured: false,
      },
      {
        taskId: 11134,
        taskTitle: "Optimize Database Queries",
        taskDescription:
          "Review and optimize database queries for better performance.",
        taskDate: "2024-11-02",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        priority: "low",
        isFeatured: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "aniket",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStroage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStroage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
