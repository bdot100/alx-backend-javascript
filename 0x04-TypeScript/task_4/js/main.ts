// Constants for Subjects
export const cpp = 'Cpp Subjects';
export const java = 'Java Subjects';
export const react = 'React Subjects';

// Teacher Object
const cTeacher = {
  experienceTeachingC: 10
};

// Function to get requirements and available teacher
const getRequirements = (subject: string) => `Requirements for ${subject}: ...`;
const getAvailableTeacher = (teacher: any) => `Available Teacher: ${teacher}`;

// Actions for Cpp Subject
console.log('C++');
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cTeacher));

// Actions for Java Subject
console.log('Java');
console.log(getRequirements(java));
console.log(getAvailableTeacher(cTeacher));

// Actions for React Subject
console.log('React');
console.log(getRequirements(react));
console.log(getAvailableTeacher(cTeacher));
