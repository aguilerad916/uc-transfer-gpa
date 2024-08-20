export interface UCAdmissionData {
  [school: string]: {
    [major: string]: {
      admitGPARange: [number, number];
      enrollGPARange: [number, number];
      admitRate: number;
    }
  }
}

export const ucAdmissionsData: UCAdmissionData = {
  "UC Berkeley": {
    "Environmental Earth Science": {
      admitGPARange: [3.40, 3.86],
      enrollGPARange: [3.57, 3.93],
      admitRate: 0.59
    },
    "Geography": {
      admitGPARange: [3.30, 3.81],
      enrollGPARange: [3.00, 3.51],
      admitRate: 0.48
    },
    "Conservation & Resource Studies": {
      admitGPARange: [3.55, 3.90],
      enrollGPARange: [3.55, 3.88],
      admitRate: 0.56
    },
    "Ecosystem Management and Forestry - Forestry": {
      admitGPARange: [3.12, 3.53],
      enrollGPARange: [3.10, 3.43],
      admitRate: 0.43
    },
    "Environmental Economics & Policy": {
      admitGPARange: [3.57, 3.98],
      enrollGPARange: [3.52, 3.94],
      admitRate: 0.44
    },
    "Environmental Science": {
      admitGPARange: [3.45, 3.83],
      enrollGPARange: [3.37, 3.81],
      admitRate: 0.20
    },
    "Society and Environment": {
      admitGPARange: [3.73, 3.95],
      enrollGPARange: [3.82, 3.98],
      admitRate: 0.33
    },
    "Architecture": {
      admitGPARange: [3.64, 3.93],
      enrollGPARange: [3.68, 3.93],
      admitRate: 0.22
    },
    "African-American Studies": {
      admitGPARange: [3.34, 3.75],
      enrollGPARange: [0, 0],  // Masked in the data
      admitRate: 0.43
    },
    "American Studies": {
      admitGPARange: [3.34, 3.95],
      enrollGPARange: [3.30, 3.97],
      admitRate: 0.67
    },
    "Asian American and Asian Diaspora Studies": {
      admitGPARange: [3.86, 4.00],
      enrollGPARange: [3.86, 3.95],
      admitRate: 0.41
    },
    "Chicano Studies": {
      admitGPARange: [3.40, 3.88],
      enrollGPARange: [0, 0],  // Masked in the data
      admitRate: 0.44
    },
    "Ethnic Studies": {
      admitGPARange: [3.36, 3.76],
      enrollGPARange: [3.26, 3.72],
      admitRate: 0.55
    },
    "Gender & Women's Studies": {
      admitGPARange: [3.64, 3.91],
      enrollGPARange: [3.50, 3.88],
      admitRate: 0.52
    },
    "Integrative Biology": {
      admitGPARange: [3.56, 3.91],
      enrollGPARange: [3.49, 3.91],
      admitRate: 0.36
    },
    "Molecular & Cell Biology": {
      admitGPARange: [3.58, 3.94],
      enrollGPARange: [3.50, 3.85],
      admitRate: 0.49
    },
    "Genetics & Plant Biology": {
      admitGPARange: [3.79, 3.98],
      enrollGPARange: [0, 0],  // Masked in the data
      admitRate: 0.19
    },
    "Microbial Biology": {
      admitGPARange: [3.65, 3.94],
      enrollGPARange: [3.66, 3.93],
      admitRate: 0.28
    },
    "Molecular Environmental Biology": {
      admitGPARange: [3.52, 3.89],
      enrollGPARange: [3.56, 3.89],
      admitRate: 0.36
    },
    "Business Administration": {
      admitGPARange: [3.87, 4.00],
      enrollGPARange: [3.86, 4.00],
      admitRate: 0.05
    },
    "Media Studies": {
      admitGPARange: [3.72, 4.00],
      enrollGPARange: [3.61, 3.95],
      admitRate: 0.36
    },
    "Computer Science": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.73, 4.00],
      admitRate: 0.05
    },
    "Data Science": {
      admitGPARange: [3.87, 4.00],
      enrollGPARange: [3.86, 4.00],
      admitRate: 0.16
    },
    "Chemical Engineering": {
      admitGPARange: [3.54, 3.93],
      enrollGPARange: [3.55, 3.94],
      admitRate: 0.36
    },
    "Bioengineering": {
      admitGPARange: [3.69, 3.92],
      enrollGPARange: [3.63, 3.93],
      admitRate: 0.18
    },
    "Civil Engineering": {
      admitGPARange: [3.80, 4.00],
      enrollGPARange: [3.77, 4.00],
      admitRate: 0.13
    },
    "Electrical Engineering - Computer Science": {
      admitGPARange: [3.92, 4.00],
      enrollGPARange: [3.91, 4.00],
      admitRate: 0.11
    },
    "Mechanical Engineering": {
      admitGPARange: [3.81, 4.00],
      enrollGPARange: [3.80, 4.00],
      admitRate: 0.17
    },
    "Nuclear Engineering": {
      admitGPARange: [3.69, 4.00],
      enrollGPARange: [3.69, 4.00],
      admitRate: 0.33
    },
    "Operations Research & Management Science": {
      admitGPARange: [0, 0],  // Masked in the data
      enrollGPARange: [0, 0],  // Masked in the data
      admitRate: 0.23
    },
    "Art": {
      admitGPARange: [3.75, 3.96],
      enrollGPARange: [3.71, 3.97],
      admitRate: 0.21
    },
    "Dance & Performance Studies": {
      admitGPARange: [3.54, 4.00],
      enrollGPARange: [3.52, 3.62],
      admitRate: 0.52
    },
    "Film": {
      admitGPARange: [3.52, 3.88],
      enrollGPARange: [3.47, 3.86],
      admitRate: 0.58
    },
    "History of Art": {
      admitGPARange: [3.61, 3.89],
      enrollGPARange: [3.57, 3.87],
      admitRate: 0.79
    },
    "Music": {
      admitGPARange: [3.51, 3.85],
      enrollGPARange: [3.72, 3.85],
      admitRate: 0.42
    },
    "Theater and Performance Studies": {
      admitGPARange: [3.49, 3.88],
      enrollGPARange: [3.53, 3.83],
      admitRate: 0.55
    },
    "Chinese Language & Literature": {
      admitGPARange: [3.80, 4.00],
      enrollGPARange: [3.81, 3.99],
      admitRate: 0.42
    },
    "Comparative Literature": {
      admitGPARange: [3.79, 4.00],
      enrollGPARange: [3.69, 3.99],
      admitRate: 0.78
    },
    "East Asian Religion, Thought, and Culture": {
      admitGPARange: [3.71, 4.00],
      enrollGPARange: [3.71, 4.00],
      admitRate: 0.35
    },
    "French": {
      admitGPARange: [3.65, 3.80],
      enrollGPARange: [3.11, 3.71],
      admitRate: 0.79
    },
    "Japanese Language & Literature": {
      admitGPARange: [3.67, 4.00],
      enrollGPARange: [3.58, 4.00],
      admitRate: 0.76
    },
    "Linguistics": {
      admitGPARange: [3.53, 3.95],
      enrollGPARange: [3.46, 3.94],
      admitRate: 0.57
    },
    "Middle Eastern Languages & Literatures": {
      admitGPARange: [3.33, 3.92],
      enrollGPARange: [3.53, 3.96],
      admitRate: 0.82
    },
    "South & Southeast Asian Studies": {
      admitGPARange: [3.55, 3.88],
      enrollGPARange: [3.59, 3.86],
      admitRate: 0.68
    },
    "Spanish / Portuguese": {
      admitGPARange: [3.52, 3.87],
      enrollGPARange: [3.47, 3.84],
      admitRate: 0.56
    },
    "English": {
      admitGPARange: [3.46, 3.93],
      enrollGPARange: [3.40, 3.94],
      admitRate: 0.68
    },
    "History": {
      admitGPARange: [3.69, 3.96],
      enrollGPARange: [3.63, 3.94],
      admitRate: 0.49
    },
    "Philosophy": {
      admitGPARange: [3.49, 3.91],
      enrollGPARange: [3.40, 3.89],
      admitRate: 0.64
    },
    "Rhetoric": {
      admitGPARange: [3.70, 4.00],
      enrollGPARange: [3.65, 4.00],
      admitRate: 0.70
    },
    "Ancient Greek and Roman Studies": {
      admitGPARange: [3.49, 3.89],
      enrollGPARange: [3.46, 3.88],
      admitRate: 0.64
    },
    "Cognitive Science": {
      admitGPARange: [3.60, 3.95],
      enrollGPARange: [3.68, 3.95],
      admitRate: 0.28
    },
    "Global Studies": {
      admitGPARange: [3.59, 3.95],
      enrollGPARange: [3.58, 4.00],
      admitRate: 0.39
    },
    "Interdisciplinary Studies": {
      admitGPARange: [3.61, 3.92],
      enrollGPARange: [3.58, 3.91],
      admitRate: 0.70
    },
    "Legal Studies": {
      admitGPARange: [3.73, 3.93],
      enrollGPARange: [3.74, 3.95],
      admitRate: 0.30
    },
    "Applied Mathematics": {
      admitGPARange: [3.66, 3.97],
      enrollGPARange: [3.62, 3.94],
      admitRate: 0.68
    },
    "Mathematics": {
      admitGPARange: [3.56, 3.90],
      enrollGPARange: [3.46, 3.88],
      admitRate: 0.62
    },
    "Statistics": {
      admitGPARange: [3.77, 4.00],
      enrollGPARange: [3.78, 4.00],
      admitRate: 0.47
    },
    "Chemical Biology": {
      admitGPARange: [3.75, 3.94],
      enrollGPARange: [3.60, 3.92],
      admitRate: 0.23
    },
    "Chemistry": {
      admitGPARange: [3.69, 3.98],
      enrollGPARange: [3.71, 3.97],
      admitRate: 0.35
    },
    "Astrophysics": {
      admitGPARange: [3.61, 3.97],
      enrollGPARange: [3.68, 3.93],
      admitRate: 0.50
    },
    "Geology": {
      admitGPARange: [3.19, 3.62],
      enrollGPARange: [0, 0],  // Masked in the data
      admitRate: 0.33
    },
    "Physics": {
      admitGPARange: [3.41, 3.92],
      enrollGPARange: [3.33, 3.90],
      admitRate: 0.58
    },
    "Psychology": {
      admitGPARange: [3.71, 4.00],
      enrollGPARange: [3.67, 3.98],
      admitRate: 0.07
    },
    "Social Welfare": {
      admitGPARange: [3.35, 3.81],
      enrollGPARange: [3.32, 3.75],
      admitRate: 0.36
    },
    "Public Health": {
      admitGPARange: [3.62, 3.99],
      enrollGPARange: [3.59, 3.81],
      admitRate: 0.18
    },
    "Urban Studies": {
      admitGPARange: [3.75, 3.92],
      enrollGPARange: [3.73, 3.92],
      admitRate: 0.36
    },
    "Anthropology": {
      admitGPARange: [3.54, 3.94],
      enrollGPARange: [3.45, 3.92],
      admitRate: 0.46
    },
    "Economics": {
      admitGPARange: [3.75, 4.00],
      enrollGPARange: [3.77, 4.00],
      admitRate: 0.09
    },
    "Political Economy": {
      admitGPARange: [3.70, 3.97],
      enrollGPARange: [3.70, 3.95],
      admitRate: 0.18
    },
    "Political Science": {
      admitGPARange: [3.66, 3.95],
      enrollGPARange: [3.61, 3.94],
      admitRate: 0.28
    },
    "Sociology": {
      admitGPARange: [3.56, 3.94],
      enrollGPARange: [3.53, 3.93],
      admitRate: 0.32
    },
    "Undeclared": {
      admitGPARange: [3.51, 3.92],
      enrollGPARange: [3.51, 3.92],
      admitRate: 0.36
    }
  },
  "UC Davis": {
    "Animal Sciences": {
      admitGPARange: [3.19, 3.68],
      enrollGPARange: [3.16, 3.65],
      admitRate: 0.71
    },
    "Environmental Policy Analysis & Planning": {
      admitGPARange: [3.44, 3.82],
      enrollGPARange: [3.38, 3.87],
      admitRate: 0.70
    },
    "Environmental Science and Management": {
      admitGPARange: [3.22, 3.77],
      enrollGPARange: [3.19, 3.73],
      admitRate: 0.76
    },
    "Food Science": {
      admitGPARange: [3.28, 3.89],
      enrollGPARange: [3.16, 3.81],
      admitRate: 0.67
    },
    "International Agricultural Development": {
      admitGPARange: [3.51, 3.85],
      enrollGPARange: [3.39, 3.75],
      admitRate: 0.83
    },
    "Plant Sciences": {
      admitGPARange: [3.31, 3.81],
      enrollGPARange: [3.31, 3.80],
      admitRate: 0.71
    },
    "Sustainable Agriculture and Food Systems": {
      admitGPARange: [3.44, 3.86],
      enrollGPARange: [3.39, 3.86],
      admitRate: 0.61
    },
    "Sustainable Environmental Design": {
      admitGPARange: [3.50, 3.90],
      enrollGPARange: [3.67, 3.89],
      admitRate: 0.77
    },
    "Undeclared/Exploratory Agricultural Science": {
      admitGPARange: [3.24, 3.79],
      enrollGPARange: [3.05, 3.66],
      admitRate: 0.30
    },
    "Viticulture & Enology": {
      admitGPARange: [3.35, 3.56],
      enrollGPARange: [3.34, 3.52],
      admitRate: 0.64
    },
    "Wildlife, Fish & Conservation Biology": {
      admitGPARange: [3.11, 3.61],
      enrollGPARange: [3.13, 3.59],
      admitRate: 0.71
    },
    "Pre-Landscape Architecture": {
      admitGPARange: [3.30, 3.84],
      enrollGPARange: [3.20, 3.68],
      admitRate: 0.70
    },
    "Gender, Sexuality, and Women's Studies": {
      admitGPARange: [3.20, 3.80],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.66
    },
    "Animal Biology": {
      admitGPARange: [3.19, 3.83],
      enrollGPARange: [3.13, 3.76],
      admitRate: 0.71
    },
    "Biotechnology": {
      admitGPARange: [3.54, 3.88],
      enrollGPARange: [3.52, 3.86],
      admitRate: 0.65
    },
    "Entomology": {
      admitGPARange: [3.14, 3.59],
      enrollGPARange: [3.33, 3.65],
      admitRate: 0.78
    },
    "Environmental Toxicology": {
      admitGPARange: [3.23, 3.35],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.41
    },
    "Global Disease Biology": {
      admitGPARange: [3.13, 3.57],
      enrollGPARange: [3.07, 3.52],
      admitRate: 0.85
    },
    "Biochemistry & Molecular Biology": {
      admitGPARange: [3.51, 3.91],
      enrollGPARange: [3.37, 3.91],
      admitRate: 0.60
    },
    "Biological Sciences": {
      admitGPARange: [3.41, 3.81],
      enrollGPARange: [3.40, 3.78],
      admitRate: 0.58
    },
    "Cell Biology": {
      admitGPARange: [3.47, 3.83],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.59
    },
    "Evolution, Ecology & Biodiversity": {
      admitGPARange: [3.34, 3.65],
      enrollGPARange: [3.19, 3.65],
      admitRate: 0.58
    },
    "Genetics and Genomics": {
      admitGPARange: [3.35, 3.86],
      enrollGPARange: [2.96, 3.57],
      admitRate: 0.59
    },
    "Molecular & Medical Microbiology": {
      admitGPARange: [3.48, 3.85],
      enrollGPARange: [3.28, 3.69],
      admitRate: 0.59
    },
    "Neurobiology, Physiology, & Behavior": {
      admitGPARange: [3.45, 3.87],
      enrollGPARange: [3.41, 3.78],
      admitRate: 0.56
    },
    "Plant Biology": {
      admitGPARange: [3.31, 4.00],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.47
    },
    "Managerial Economics": {
      admitGPARange: [3.47, 3.91],
      enrollGPARange: [3.35, 3.78],
      admitRate: 0.70
    },
    "Communication": {
      admitGPARange: [3.37, 3.90],
      enrollGPARange: [3.31, 3.81],
      admitRate: 0.77
    },
    "Computer Science": {
      admitGPARange: [3.72, 3.96],
      enrollGPARange: [3.63, 3.87],
      admitRate: 0.45
    },
    "Agricultural and Environmental Education": {
      admitGPARange: [3.15, 3.81],
      enrollGPARange: [3.13, 3.62],
      admitRate: 0.62
    },
    "Agricultural and Environmental Technology": {
      admitGPARange: [3.53, 3.83],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.46
    },
    "Aerospace Science and Engineering": {
      admitGPARange: [3.55, 3.85],
      enrollGPARange: [3.55, 4.00],
      admitRate: 0.25
    },
    "Biomedical Engineering": {
      admitGPARange: [3.54, 3.93],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.26
    },
    "Chemical Engineering": {
      admitGPARange: [3.43, 3.86],
      enrollGPARange: [3.58, 3.75],
      admitRate: 0.41
    },
    "Civil Engineering": {
      admitGPARange: [3.55, 3.81],
      enrollGPARange: [3.55, 3.74],
      admitRate: 0.35
    },
    "Computer Engineering": {
      admitGPARange: [3.60, 3.95],
      enrollGPARange: [3.74, 3.92],
      admitRate: 0.37
    },
    "Computer Science & Engineering": {
      admitGPARange: [3.66, 3.91],
      enrollGPARange: [3.71, 3.84],
      admitRate: 0.16
    },
    "Engineering": {
      admitGPARange: [3.52, 3.92],
      enrollGPARange: [3.40, 3.80],
      admitRate: 0.49
    },
    "Environmental Engineering": {
      admitGPARange: [3.48, 3.93],
      enrollGPARange: [3.62, 3.73],
      admitRate: 0.50
    },
    "Materials Science": {
      admitGPARange: [3.44, 3.85],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.43
    },
    "Mechanical Engineering": {
      admitGPARange: [3.55, 3.89],
      enrollGPARange: [3.52, 3.82],
      admitRate: 0.33
    },
    "Human Development": {
      admitGPARange: [3.29, 3.83],
      enrollGPARange: [3.19, 3.81],
      admitRate: 0.73
    },
    "Art - Studio": {
      admitGPARange: [3.40, 3.91],
      enrollGPARange: [3.38, 3.92],
      admitRate: 0.78
    },
    "Art History": {
      admitGPARange: [3.42, 3.80],
      enrollGPARange: [3.56, 3.75],
      admitRate: 0.85
    },
    "Cinema and Digital Media": {
      admitGPARange: [3.40, 3.79],
      enrollGPARange: [3.26, 3.62],
      admitRate: 0.68
    },
    "Design": {
      admitGPARange: [3.47, 3.92],
      enrollGPARange: [3.47, 3.89],
      admitRate: 0.74
    },
    "Music": {
      admitGPARange: [3.47, 3.91],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.58
    },
    "Theatre and Dance": {
      admitGPARange: [3.32, 3.85],
      enrollGPARange: [3.34, 3.46],
      admitRate: 0.74
    },
    "Japanese": {
      admitGPARange: [3.15, 3.81],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.85
    },
    "Linguistics": {
      admitGPARange: [3.51, 3.99],
      enrollGPARange: [3.38, 3.71],
      admitRate: 0.82
    },
    "English": {
      admitGPARange: [3.37, 3.89],
      enrollGPARange: [3.39, 3.86],
      admitRate: 0.81
    },
    "History": {
      admitGPARange: [3.44, 3.89],
      enrollGPARange: [3.22, 3.93],
      admitRate: 0.77
    },
    "Philosophy": {
      admitGPARange: [3.30, 3.87],
      enrollGPARange: [3.40, 3.89],
      admitRate: 0.74
    },
    "Clinical Nutrition": {
      admitGPARange: [3.29, 3.83],
      enrollGPARange: [3.29, 3.69],
      admitRate: 0.72
    },
    "Marine and Coastal Science": {
      admitGPARange: [3.20, 3.88],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.59
    },
    "Nutritional Science": {
      admitGPARange: [3.29, 3.78],
      enrollGPARange: [3.07, 3.78],
      admitRate: 0.69
    },
    "Cognitive Science": {
      admitGPARange: [3.39, 3.85],
      enrollGPARange: [3.27, 3.79],
      admitRate: 0.83
    },
    "Data Science": {
      admitGPARange: [3.62, 3.95],
      enrollGPARange: [3.41, 3.78],
      admitRate: 0.61
    },
    "Science & Technology Studies": {
      admitGPARange: [3.28, 3.64],
      enrollGPARange: [3.17, 3.53],
      admitRate: 0.86
    },
    "Applied Mathematics": {
      admitGPARange: [3.47, 3.90],
      enrollGPARange: [3.42, 3.86],
      admitRate: 0.70
    },
    "Mathematics": {
      admitGPARange: [3.51, 3.88],
      enrollGPARange: [3.55, 3.79],
      admitRate: 0.70
    },
    "Statistics": {
      admitGPARange: [3.45, 3.91],
      enrollGPARange: [3.35, 3.83],
      admitRate: 0.88
    },
    "Pharmaceutical Chemistry": {
      admitGPARange: [3.51, 3.85],
      enrollGPARange: [3.18, 3.56],
      admitRate: 0.48
    },
    "Applied Physics": {
      admitGPARange: [3.34, 3.73],
      enrollGPARange: [3.15, 3.90],
      admitRate: 0.64
    },
    "Chemistry": {
      admitGPARange: [3.27, 3.84],
      enrollGPARange: [3.09, 3.54],
      admitRate: 0.82
    },
    "Geology": {
      admitGPARange: [3.40, 3.83],
      enrollGPARange: [3.42, 3.78],
      admitRate: 0.79
    },
    "Physics": {
      admitGPARange: [3.41, 3.90],
      enrollGPARange: [3.09, 3.68],
      admitRate: 0.61
    },
    "Psychology": {
      admitGPARange: [3.50, 3.90],
      enrollGPARange: [3.39, 3.85],
      admitRate: 0.70
    },
    "Community & Regional Development": {
      admitGPARange: [3.35, 3.92],
      enrollGPARange: [3.43, 3.72],
      admitRate: 0.74
    },
    "Anthropology": {
      admitGPARange: [3.28, 3.87],
      enrollGPARange: [3.24, 3.62],
      admitRate: 0.82
    },
    "Economics": {
      admitGPARange: [3.51, 3.91],
      enrollGPARange: [3.25, 3.75],
      admitRate: 0.75
    },
    "International Relations": {
      admitGPARange: [3.36, 3.83],
      enrollGPARange: [3.06, 3.63],
      admitRate: 0.80
    },
    "Political Science": {
      admitGPARange: [3.38, 3.91],
      enrollGPARange: [3.21, 3.68],
      admitRate: 0.84
    },
    "Political Science - Public Service": {
      admitGPARange: [3.35, 3.88],
      enrollGPARange: [3.25, 3.62],
      admitRate: 0.81
    },
    "Sociology": {
      admitGPARange: [3.36, 3.84],
      enrollGPARange: [3.28, 3.76],
      admitRate: 0.80
    },
    "Sociology/Organizational Studies": {
      admitGPARange: [3.28, 3.79],
      enrollGPARange: [3.09, 3.48],
      admitRate: 0.74
    }
  },
  "UC Irvine": {
    "Environmental Science and Policy": {
      admitGPARange: [3.47, 3.85],
      enrollGPARange: [3.44, 3.83],
      admitRate: 0.57
    },
    "Chinese Studies": {
      admitGPARange: [3.61, 4.00],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.46
    },
    "East Asian Cultures": {
      admitGPARange: [3.59, 3.95],
      enrollGPARange: [3.25, 3.81],
      admitRate: 0.34
    },
    "Chicano/Latino Studies": {
      admitGPARange: [3.10, 3.74],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.57
    },
    "Biological Sciences": {
      admitGPARange: [3.45, 3.87],
      enrollGPARange: [3.34, 3.78],
      admitRate: 0.44
    },
    "Business Administration": {
      admitGPARange: [3.80, 4.00],
      enrollGPARange: [3.76, 3.94],
      admitRate: 0.25
    },
    "Business Economics": {
      admitGPARange: [3.75, 3.97],
      enrollGPARange: [3.71, 3.90],
      admitRate: 0.48
    },
    "Literary Journalism": {
      admitGPARange: [3.58, 4.00],
      enrollGPARange: [3.45, 3.87],
      admitRate: 0.48
    },
    "Computer Science": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.77, 4.00],
      admitRate: 0.20
    },
    "Game Design and Interactive Media": {
      admitGPARange: [3.61, 3.92],
      enrollGPARange: [3.48, 3.88],
      admitRate: 0.17
    },
    "Informatics": {
      admitGPARange: [3.54, 3.94],
      enrollGPARange: [3.49, 3.97],
      admitRate: 0.38
    },
    "Biology/Education": {
      admitGPARange: [3.25, 3.53],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.20
    },
    "Education Sciences": {
      admitGPARange: [3.41, 3.84],
      enrollGPARange: [3.41, 3.78],
      admitRate: 0.57
    },
    "Software Engineering": {
      admitGPARange: [3.64, 3.85],
      enrollGPARange: [3.53, 3.79],
      admitRate: 0.51
    },
    "Computer Science & Engineering": {
      admitGPARange: [3.86, 4.00],
      enrollGPARange: [3.82, 4.00],
      admitRate: 0.21
    },
    "Aerospace Engineering": {
      admitGPARange: [3.55, 3.90],
      enrollGPARange: [3.52, 3.76],
      admitRate: 0.34
    },
    "Biomedical Engineering": {
      admitGPARange: [3.51, 3.84],
      enrollGPARange: [3.39, 3.68],
      admitRate: 0.45
    },
    "Chemical Engineering": {
      admitGPARange: [3.48, 3.86],
      enrollGPARange: [3.45, 3.79],
      admitRate: 0.47
    },
    "Computer Engineering": {
      admitGPARange: [3.62, 3.96],
      enrollGPARange: [3.56, 3.81],
      admitRate: 0.38
    },
    "Engineering - Civil": {
      admitGPARange: [3.47, 3.75],
      enrollGPARange: [3.39, 3.68],
      admitRate: 0.38
    },
    "Engineering - Electrical": {
      admitGPARange: [3.51, 3.92],
      enrollGPARange: [3.46, 3.69],
      admitRate: 0.41
    },
    "Engineering - Mechanical": {
      admitGPARange: [3.60, 3.91],
      enrollGPARange: [3.58, 3.79],
      admitRate: 0.36
    },
    "Environmental Engineering": {
      admitGPARange: [3.47, 3.93],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.33
    },
    "Art History": {
      admitGPARange: [3.44, 3.84],
      enrollGPARange: [3.28, 3.67],
      admitRate: 0.69
    },
    "Film and Media Studies": {
      admitGPARange: [3.47, 3.89],
      enrollGPARange: [3.36, 3.76],
      admitRate: 0.66
    },
    "Art": {
      admitGPARange: [3.49, 3.93],
      enrollGPARange: [3.35, 3.92],
      admitRate: 0.27
    },
    "Drama": {
      admitGPARange: [3.63, 3.92],
      enrollGPARange: [3.61, 3.92],
      admitRate: 0.43
    },
    "Japanese Language & Literature": {
      admitGPARange: [3.32, 3.78],
      enrollGPARange: [3.30, 3.55],
      admitRate: 0.69
    },
    "Korean Literature and Culture": {
      admitGPARange: [3.45, 3.87],
      enrollGPARange: [3.30, 3.77],
      admitRate: 0.62
    },
    "Spanish": {
      admitGPARange: [3.15, 3.61],
      enrollGPARange: [2.78, 3.67],
      admitRate: 0.54
    },
    "English": {
      admitGPARange: [3.37, 3.88],
      enrollGPARange: [3.20, 3.73],
      admitRate: 0.63
    },
    "History": {
      admitGPARange: [3.44, 3.90],
      enrollGPARange: [3.10, 3.82],
      admitRate: 0.66
    },
    "Philosophy": {
      admitGPARange: [3.34, 3.90],
      enrollGPARange: [3.08, 3.32],
      admitRate: 0.60
    },
    "Data Science": {
      admitGPARange: [3.72, 3.95],
      enrollGPARange: [3.63, 3.83],
      admitRate: 0.41
    },
    "Global Cultures": {
      admitGPARange: [3.17, 3.74],
      enrollGPARange: [2.75, 3.48],
      admitRate: 0.64
    },
    "International Studies": {
      admitGPARange: [3.42, 3.85],
      enrollGPARange: [3.17, 3.72],
      admitRate: 0.61
    },
    "Social Ecology": {
      admitGPARange: [3.18, 3.74],
      enrollGPARange: [3.13, 3.72],
      admitRate: 0.67
    },
    "Mathematics": {
      admitGPARange: [3.59, 3.94],
      enrollGPARange: [3.44, 3.78],
      admitRate: 0.71
    },
    "Nursing Science": {
      admitGPARange: [3.94, 3.95],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.02
    },
    "Pharmaceutical Science": {
      admitGPARange: [3.74, 3.90],
      enrollGPARange: [3.73, 3.88],
      admitRate: 0.19
    },
    "Applied Physics": {
      admitGPARange: [3.26, 3.80],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.54
    },
    "Chemistry": {
      admitGPARange: [3.52, 3.91],
      enrollGPARange: [3.53, 3.90],
      admitRate: 0.59
    },
    "Earth System Science": {
      admitGPARange: [3.39, 3.71],
      enrollGPARange: [3.51, 3.53],
      admitRate: 0.40
    },
    "Physics": {
      admitGPARange: [3.55, 3.90],
      enrollGPARange: [3.18, 3.66],
      admitRate: 0.51
    },
    "Language Science": {
      admitGPARange: [3.52, 3.95],
      enrollGPARange: [3.47, 3.92],
      admitRate: 0.73
    },
    "Psychology": {
      admitGPARange: [3.65, 3.94],
      enrollGPARange: [3.63, 3.89],
      admitRate: 0.07
    },
    "Psychological Science": {
      admitGPARange: [3.52, 3.91],
      enrollGPARange: [3.44, 3.85],
      admitRate: 0.74
    },
    "Public Health Policy": {
      admitGPARange: [3.41, 3.80],
      enrollGPARange: [3.33, 3.75],
      admitRate: 0.78
    },
    "Public Health Sciences": {
      admitGPARange: [3.51, 3.84],
      enrollGPARange: [3.44, 3.82],
      admitRate: 0.48
    },
    "Anthropology": {
      admitGPARange: [3.24, 3.88],
      enrollGPARange: [3.09, 3.55],
      admitRate: 0.64
    },
    "Economics": {
      admitGPARange: [3.74, 3.96],
      enrollGPARange: [3.69, 3.93],
      admitRate: 0.44
    },
    "Political Science": {
      admitGPARange: [3.44, 3.91],
      enrollGPARange: [3.22, 3.65],
      admitRate: 0.62
    },
    "Social Policy and Public Service": {
      admitGPARange: [3.30, 3.89],
      enrollGPARange: [3.21, 3.54],
      admitRate: 0.65
    },
    "Sociology": {
      admitGPARange: [3.37, 3.89],
      enrollGPARange: [3.12, 3.68],
      admitRate: 0.66
    },
    "Criminology, Law & Society": {
      admitGPARange: [3.43, 3.87],
      enrollGPARange: [3.35, 3.86],
      admitRate: 0.54
    },
    "Urban Studies": {
      admitGPARange: [3.37, 3.89],
      enrollGPARange: [3.26, 3.64],
      admitRate: 0.75
    },
    "Undeclared": {
      admitGPARange: [3.33, 3.96],
      enrollGPARange: [3.36, 3.71],
      admitRate: 0.34
    }
  },
  "UCLA": {
    "Environmental Science": {
      admitGPARange: [3.50, 3.84],
      enrollGPARange: [3.50, 3.83],
      admitRate: 0.34
    },
    "Architectural Studies": {
      admitGPARange: [3.78, 4.00],
      enrollGPARange: [3.78, 3.98],
      admitRate: 0.10
    },
    "African American Studies": {
      admitGPARange: [3.43, 3.80],
      enrollGPARange: [3.43, 3.77],
      admitRate: 0.46
    },
    "American Indian Studies": {
      admitGPARange: [3.35, 3.63],
      enrollGPARange: [3.32, 3.69],
      admitRate: 0.63
    },
    "Asian American Studies": {
      admitGPARange: [3.65, 4.00],
      enrollGPARange: [3.46, 4.00],
      admitRate: 0.36
    },
    "Asian Humanities": {
      admitGPARange: [3.76, 3.98],
      enrollGPARange: [3.81, 3.93],
      admitRate: 0.36
    },
    "Chicana & Chicano Studies": {
      admitGPARange: [3.40, 3.83],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.40
    },
    "Gender Studies": {
      admitGPARange: [3.58, 3.91],
      enrollGPARange: [3.58, 3.90],
      admitRate: 0.52
    },
    "Nordic Studies": {
      admitGPARange: [0, 0], // Masked in the data
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.33
    },
    "Pre-Asian Studies": {
      admitGPARange: [3.82, 4.00],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.38
    },
    "Pre-Latin American Studies": {
      admitGPARange: [3.61, 3.80],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.56
    },
    "Spanish and Community and Culture": {
      admitGPARange: [3.57, 3.83],
      enrollGPARange: [3.56, 3.85],
      admitRate: 0.68
    },
    "Biochemistry": {
      admitGPARange: [3.78, 3.95],
      enrollGPARange: [3.78, 3.95],
      admitRate: 0.38
    },
    "Biology": {
      admitGPARange: [3.75, 4.00],
      enrollGPARange: [3.73, 3.96],
      admitRate: 0.22
    },
    "Ecology, Behavior & Evolution": {
      admitGPARange: [3.34, 3.93],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.20
    },
    "Microbiology - Immunology - Molecular Genetics": {
      admitGPARange: [3.70, 3.93],
      enrollGPARange: [3.57, 3.90],
      admitRate: 0.39
    },
    "Molecular, Cell, & Developmental Biology": {
      admitGPARange: [3.80, 4.00],
      enrollGPARange: [3.80, 4.00],
      admitRate: 0.43
    },
    "Neuroscience": {
      admitGPARange: [3.68, 3.98],
      enrollGPARange: [3.68, 3.98],
      admitRate: 0.25
    },
    "Physiological Science": {
      admitGPARange: [3.68, 3.95],
      enrollGPARange: [3.66, 3.90],
      admitRate: 0.23
    },
    "Pre-Computational & Systems Biology": {
      admitGPARange: [3.52, 3.77],
      enrollGPARange: [3.55, 3.74],
      admitRate: 0.32
    },
    "Labor Studies": {
      admitGPARange: [3.58, 3.86],
      enrollGPARange: [3.58, 3.83],
      admitRate: 0.37
    },
    "Pre-Business Economics": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.83, 4.00],
      admitRate: 0.13
    },
    "Communication": {
      admitGPARange: [3.95, 4.00],
      enrollGPARange: [3.95, 4.00],
      admitRate: 0.12
    },
    "Computer Science": {
      admitGPARange: [3.97, 4.00],
      enrollGPARange: [3.97, 4.00],
      admitRate: 0.05
    },
    "Pre-Education and Social Transformation": {
      admitGPARange: [3.66, 3.90],
      enrollGPARange: [3.63, 3.92],
      admitRate: 0.48
    },
    "Aerospace Engineering": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.75, 3.92],
      admitRate: 0.15
    },
    "Bioengineering": {
      admitGPARange: [3.89, 4.00],
      enrollGPARange: [3.90, 3.98],
      admitRate: 0.11
    },
    "Chemical Engineering": {
      admitGPARange: [3.87, 4.00],
      enrollGPARange: [3.85, 3.94],
      admitRate: 0.15
    },
    "Civil Engineering": {
      admitGPARange: [3.82, 4.00],
      enrollGPARange: [3.78, 3.93],
      admitRate: 0.14
    },
    "Computer Engineering": {
      admitGPARange: [3.91, 4.00],
      enrollGPARange: [3.90, 4.00],
      admitRate: 0.12
    },
    "Computer Science & Engineering": {
      admitGPARange: [3.96, 4.00],
      enrollGPARange: [3.95, 4.00],
      admitRate: 0.12
    },
    "Electrical Engineering": {
      admitGPARange: [3.88, 4.00],
      enrollGPARange: [3.87, 4.00],
      admitRate: 0.32
    },
    "Mechanical Engineering": {
      admitGPARange: [3.89, 4.00],
      enrollGPARange: [3.87, 3.97],
      admitRate: 0.15
    },
    "Art History": {
      admitGPARange: [3.65, 3.94],
      enrollGPARange: [3.64, 3.94],
      admitRate: 0.61
    },
    "Ethnomusicology": {
      admitGPARange: [3.66, 3.83],
      enrollGPARange: [3.65, 3.70],
      admitRate: 0.43
    },
    "Global Jazz Studies": {
      admitGPARange: [0, 0], // Masked in the data
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.10
    },
    "Music History and Industry": {
      admitGPARange: [0, 0], // Masked in the data
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.09
    },
    "Music Performance": {
      admitGPARange: [0, 0], // Masked in the data
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.10
    },
    "Art": {
      admitGPARange: [3.49, 3.91],
      enrollGPARange: [3.13, 3.86],
      admitRate: 0.08
    },
    "Dance": {
      admitGPARange: [3.58, 3.89],
      enrollGPARange: [3.51, 3.89],
      admitRate: 0.36
    },
    "Design Media Arts": {
      admitGPARange: [3.55, 3.93],
      enrollGPARange: [3.54, 3.93],
      admitRate: 0.06
    },
    "World Arts & Culture": {
      admitGPARange: [3.64, 3.93],
      enrollGPARange: [3.62, 3.84],
      admitRate: 0.16
    },
    "Film & Television": {
      admitGPARange: [3.83, 4.00],
      enrollGPARange: [3.81, 4.00],
      admitRate: 0.02
    },
    "Theater": {
      admitGPARange: [3.80, 3.98],
      enrollGPARange: [3.79, 3.99],
      admitRate: 0.06
    },
    "Asian Languages and Linguistics": {
      admitGPARange: [3.66, 3.90],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.30
    },
    "Chinese": {
      admitGPARange: [3.61, 4.00],
      enrollGPARange: [3.61, 3.91],
      admitRate: 0.42
    },
    "Comparative Literature": {
      admitGPARange: [3.60, 3.96],
      enrollGPARange: [3.53, 3.86],
      admitRate: 0.41
    },
    "European Languages and Transcultural Studies with French and Francophone": {
      admitGPARange: [3.71, 3.88],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.40
    },
    "Japanese": {
      admitGPARange: [3.55, 3.94],
      enrollGPARange: [3.54, 3.80],
      admitRate: 0.63
    },
    "Korean": {
      admitGPARange: [3.58, 3.87],
      enrollGPARange: [3.75, 3.87],
      admitRate: 0.50
    },
    "Linguistics": {
      admitGPARange: [3.58, 3.95],
      enrollGPARange: [3.54, 3.94],
      admitRate: 0.53
    },
    "Linguistics - English": {
      admitGPARange: [3.63, 3.82],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.46
    },
    "Linguistics & Anthropology": {
      admitGPARange: [3.76, 3.90],
      enrollGPARange: [3.77, 3.90],
      admitRate: 0.30
    },
    "Linguistics & Asian Languages & Cultures": {
      admitGPARange: [3.78, 3.88],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.53
    },
    "Linguistics & Computer Science": {
      admitGPARange: [3.76, 4.00],
      enrollGPARange: [3.76, 3.99],
      admitRate: 0.35
    },
    "Linguistics & Psychology": {
      admitGPARange: [3.58, 3.93],
      enrollGPARange: [3.53, 3.91],
      admitRate: 0.46
    },
    "Spanish": {
      admitGPARange: [3.50, 3.87],
      enrollGPARange: [3.51, 3.87],
      admitRate: 0.54
    },
    "American Literature & Culture": {
      admitGPARange: [3.60, 3.86],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.47
    },
    "English": {
      admitGPARange: [3.62, 3.94],
      enrollGPARange: [3.60, 3.93],
      admitRate: 0.59
    },
    "Philosophy": {
      admitGPARange: [3.62, 3.93],
      enrollGPARange: [3.61, 3.92],
      admitRate: 0.57
    },
    "Pre-History": {
      admitGPARange: [3.63, 3.95],
      enrollGPARange: [3.64, 3.95],
      admitRate: 0.62
    },
    "Applied Linguistics": {
      admitGPARange: [3.68, 4.00],
      enrollGPARange: [3.74, 4.00],
      admitRate: 0.65
    },
    "Classical Civilization": {
      admitGPARange: [3.83, 4.00],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.44
    },
    "Geography/Environmental Studies": {
      admitGPARange: [3.66, 3.90],
      enrollGPARange: [3.63, 3.90],
      admitRate: 0.52
    },
    "Pre-Human Biology and Society": {
      admitGPARange: [3.82, 4.00],
      enrollGPARange: [3.81, 4.00],
      admitRate: 0.27
    },
    "Pre-Cognitive Science": {
      admitGPARange: [3.78, 4.00],
      enrollGPARange: [3.77, 4.00],
      admitRate: 0.34
    },
    "Pre-Global Studies": {
      admitGPARange: [3.63, 3.95],
      enrollGPARange: [3.70, 3.95],
      admitRate: 0.40
    },
    "Pre-Applied Mathematics": {
      admitGPARange: [3.84, 3.98],
      enrollGPARange: [3.87, 3.98],
      admitRate: 0.41
    },
    "Pre-Data Theory": {
      admitGPARange: [3.86, 4.00],
      enrollGPARange: [3.82, 4.00],
      admitRate: 0.39
    },
    "Pre-Financial Actuarial Mathematics": {
      admitGPARange: [3.84, 4.00],
      enrollGPARange: [3.85, 3.97],
      admitRate: 0.36
    },
    "Pre-Mathematics": {
      admitGPARange: [3.80, 4.00],
      enrollGPARange: [3.85, 3.98],
      admitRate: 0.33
    },
    "Pre-Mathematics for Teaching": {
      admitGPARange: [3.65, 3.82],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.33
    },
    "Pre-Mathematics of Computation": {
      admitGPARange: [3.81, 3.98],
      enrollGPARange: [3.81, 3.97],
      admitRate: 0.50
    },
    "Pre-Mathematics/Applied Science": {
      admitGPARange: [3.82, 3.95],
      enrollGPARange: [3.62, 3.90],
      admitRate: 0.35
    },
    "Pre-Mathematics/Economics": {
      admitGPARange: [3.87, 4.00],
      enrollGPARange: [3.88, 4.00],
      admitRate: 0.38
    },
    "Pre-Statistics and Data Science": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.85, 4.00],
      admitRate: 0.35
    },
    "Nursing - Four Year Program": {
      admitGPARange: [3.81, 3.96],
      enrollGPARange: [3.81, 3.96],
      admitRate: 0.08
    },
    "Astrophysics": {
      admitGPARange: [3.65, 3.98],
      enrollGPARange: [3.64, 4.00],
      admitRate: 0.38
    },
    "Chemistry": {
      admitGPARange: [3.68, 3.94],
      enrollGPARange: [3.60, 3.91],
      admitRate: 0.36
    },
    "Earth and Environmental Science": {
      admitGPARange: [3.52, 3.77],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.24
    },
    "Geology": {
      admitGPARange: [3.66, 3.86],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.53
    },
    "Physics": {
      admitGPARange: [3.75, 3.99],
      enrollGPARange: [3.75, 3.91],
      admitRate: 0.34
    },
    "Pre-Psychobiology": {
      admitGPARange: [3.66, 3.94],
      enrollGPARange: [3.65, 3.94],
      admitRate: 0.21
    },
    "Pre-Psychology": {
      admitGPARange: [3.77, 4.00],
      enrollGPARange: [3.77, 4.00],
      admitRate: 0.24
    },
    "Pre-Public Affairs": {
      admitGPARange: [3.62, 3.93],
      enrollGPARange: [3.56, 3.94],
      admitRate: 0.38
    },
    "Anthropology": {
      admitGPARange: [3.47, 3.91],
      enrollGPARange: [3.48, 3.92],
      admitRate: 0.58
    },
    "Geography": {
      admitGPARange: [3.59, 3.95],
      enrollGPARange: [3.58, 3.93],
      admitRate: 0.53
    },
    "Pre-International Development Studies": {
      admitGPARange: [3.75, 3.98],
      enrollGPARange: [3.71, 3.90],
      admitRate: 0.32
    },
    "Pre-Economics": {
      admitGPARange: [3.85, 4.00],
      enrollGPARange: [3.85, 4.00],
      admitRate: 0.18
    },
    "Pre-Political Science": {
      admitGPARange: [3.71, 3.97],
      enrollGPARange: [3.71, 3.94],
      admitRate: 0.47
    },
    "Pre-Sociology": {
      admitGPARange: [3.74, 4.00],
      enrollGPARange: [3.74, 4.00],
      admitRate: 0.46
    }
  },
  "UC Merced": {
    "Biological Sciences": {
      admitGPARange: [3.16, 3.73],
      enrollGPARange: [3.16, 3.81],
      admitRate: 0.41
    },
    "Management and Business Economics": {
      admitGPARange: [3.10, 3.77],
      enrollGPARange: [2.75, 3.80],
      admitRate: 0.66
    },
    "Civil Engineering": {
      admitGPARange: [3.21, 3.58],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.74
    },
    "Computer Science & Engineering": {
      admitGPARange: [3.36, 3.85],
      enrollGPARange: [3.23, 3.47],
      admitRate: 0.39
    },
    "Mechanical Engineering": {
      admitGPARange: [3.11, 3.66],
      enrollGPARange: [3.08, 3.44],
      admitRate: 0.63
    },
    "Literatures in English": {
      admitGPARange: [3.12, 3.62],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.71
    },
    "Cognitive Science": {
      admitGPARange: [3.02, 3.85],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.75
    },
    "Applied Mathematics": {
      admitGPARange: [3.27, 3.69],
      enrollGPARange: [3.02, 3.62],
      admitRate: 0.58
    },
    "Psychology": {
      admitGPARange: [3.18, 3.76],
      enrollGPARange: [2.97, 3.54],
      admitRate: 0.84
    },
    "Public Health": {
      admitGPARange: [3.18, 3.67],
      enrollGPARange: [2.89, 3.55],
      admitRate: 0.67
    },
    "Economics": {
      admitGPARange: [3.30, 3.81],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.70
    },
    "Sociology": {
      admitGPARange: [3.07, 3.73],
      enrollGPARange: [3.01, 3.51],
      admitRate: 0.75
    },
    "Invalid CCM Combination": {
      admitGPARange: [3.12, 3.78],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.62
    },
    "Undeclared": {
      admitGPARange: [3.08, 3.69],
      enrollGPARange: [3.01, 3.57],
      admitRate: 0.91
    }
  },
  "UC Riverside": {
    "Environmental Science": {
      admitGPARange: [3.11, 3.75],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.34
    },
    "African-American Studies": {
      admitGPARange: [3.02, 3.42],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.77
    },
    "Ethnic Studies": {
      admitGPARange: [2.78, 3.50],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.69
    },
    "Neuroscience (Humanities & Social Sciences)": {
      admitGPARange: [3.10, 3.74],
      enrollGPARange: [2.96, 3.37],
      admitRate: 0.37
    },
    "Biochemistry": {
      admitGPARange: [3.14, 3.83],
      enrollGPARange: [2.72, 3.43],
      admitRate: 0.57
    },
    "Biology": {
      admitGPARange: [3.20, 3.78],
      enrollGPARange: [2.97, 3.63],
      admitRate: 0.51
    },
    "Cell, Molecular, & Developmental Biology": {
      admitGPARange: [3.32, 3.88],
      enrollGPARange: [3.13, 3.54],
      admitRate: 0.62
    },
    "Microbiology": {
      admitGPARange: [3.21, 3.87],
      enrollGPARange: [2.89, 3.61],
      admitRate: 0.55
    },
    "Neuroscience (Natural & Agricultural Sciences)": {
      admitGPARange: [2.97, 3.58],
      enrollGPARange: [2.91, 3.66],
      admitRate: 0.60
    },
    "Plant Biology": {
      admitGPARange: [3.22, 3.87],
      enrollGPARange: [3.37, 3.79],
      admitRate: 0.35
    },
    "Undeclared - Life Science": {
      admitGPARange: [3.29, 3.67],
      enrollGPARange: [3.29, 3.51],
      admitRate: 1.00
    },
    "Business Administration": {
      admitGPARange: [3.20, 3.82],
      enrollGPARange: [3.12, 3.67],
      admitRate: 0.60
    },
    "Computer Science": {
      admitGPARange: [3.79, 4.00],
      enrollGPARange: [3.70, 3.92],
      admitRate: 0.26
    },
    "Computer Science with Business Applications": {
      admitGPARange: [3.58, 3.90],
      enrollGPARange: [3.38, 3.77],
      admitRate: 0.36
    },
    "Data Science": {
      admitGPARange: [3.52, 3.91],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.38
    },
    "Education, Society, and Human Development": {
      admitGPARange: [2.98, 3.67],
      enrollGPARange: [2.83, 3.37],
      admitRate: 0.75
    },
    "Bioengineering": {
      admitGPARange: [3.23, 3.85],
      enrollGPARange: [3.07, 3.65],
      admitRate: 0.44
    },
    "Chemical Engineering": {
      admitGPARange: [3.17, 3.74],
      enrollGPARange: [2.65, 3.63],
      admitRate: 0.52
    },
    "Computer Engineering": {
      admitGPARange: [3.58, 3.93],
      enrollGPARange: [3.23, 3.52],
      admitRate: 0.27
    },
    "Electrical Engineering": {
      admitGPARange: [3.16, 3.79],
      enrollGPARange: [3.21, 3.54],
      admitRate: 0.50
    },
    "Mechanical Engineering": {
      admitGPARange: [3.20, 3.61],
      enrollGPARange: [2.99, 3.53],
      admitRate: 0.26
    },
    "Art": {
      admitGPARange: [3.04, 3.85],
      enrollGPARange: [2.98, 3.73],
      admitRate: 0.37
    },
    "Art History": {
      admitGPARange: [2.93, 3.71],
      enrollGPARange: [3.01, 3.73],
      admitRate: 0.79
    },
    "Media and Cultural Studies": {
      admitGPARange: [3.05, 3.79],
      enrollGPARange: [3.08, 3.45],
      admitRate: 0.79
    },
    "Music": {
      admitGPARange: [2.95, 3.67],
      enrollGPARange: [2.78, 3.54],
      admitRate: 0.59
    },
    "Theatre, Film and Digital Production": {
      admitGPARange: [3.19, 3.79],
      enrollGPARange: [3.06, 3.76],
      admitRate: 0.72
    },
    "Japanese Language & Literature": {
      admitGPARange: [3.10, 3.66],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.92
    },
    "Linguistics": {
      admitGPARange: [3.04, 3.79],
      enrollGPARange: [2.71, 3.60],
      admitRate: 0.81
    },
    "Spanish": {
      admitGPARange: [3.36, 3.84],
      enrollGPARange: [3.50, 3.84],
      admitRate: 0.75
    },
    "Creative Writing": {
      admitGPARange: [3.10, 3.70],
      enrollGPARange: [3.02, 3.63],
      admitRate: 0.80
    },
    "English": {
      admitGPARange: [3.16, 3.77],
      enrollGPARange: [3.11, 3.64],
      admitRate: 0.79
    },
    "History": {
      admitGPARange: [3.10, 3.75],
      enrollGPARange: [3.04, 3.52],
      admitRate: 0.79
    },
    "Liberal Studies": {
      admitGPARange: [3.08, 3.63],
      enrollGPARange: [2.95, 3.67],
      admitRate: 0.64
    },
    "Philosophy": {
      admitGPARange: [2.94, 3.78],
      enrollGPARange: [2.89, 3.46],
      admitRate: 0.79
    },
    "Global Studies": {
      admitGPARange: [2.97, 3.66],
      enrollGPARange: [3.06, 3.42],
      admitRate: 0.86
    },
    "Mathematics": {
      admitGPARange: [3.07, 3.81],
      enrollGPARange: [2.79, 3.58],
      admitRate: 0.68
    },
    "Mathematics for Secondary School": {
      admitGPARange: [3.20, 3.63],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.63
    },
    "Statistics": {
      admitGPARange: [3.55, 3.94],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.61
    },
    "Chemistry": {
      admitGPARange: [3.07, 3.86],
      enrollGPARange: [2.86, 3.52],
      admitRate: 0.52
    },
    "Physics": {
      admitGPARange: [2.99, 3.69],
      enrollGPARange: [2.77, 3.55],
      admitRate: 0.63
    },
    "Psychology": {
      admitGPARange: [3.36, 3.84],
      enrollGPARange: [3.31, 3.84],
      admitRate: 0.43
    },
    "Public Service - Political Science": {
      admitGPARange: [2.94, 3.65],
      enrollGPARange: [2.63, 3.02],
      admitRate: 0.80
    },
    "Public Policy": {
      admitGPARange: [3.03, 3.62],
      enrollGPARange: [3.00, 3.50],
      admitRate: 0.79
    },
    "Anthropology": {
      admitGPARange: [3.02, 3.71],
      enrollGPARange: [3.08, 3.62],
      admitRate: 0.84
    },
    "Business Economics": {
      admitGPARange: [3.35, 3.88],
      enrollGPARange: [3.06, 3.57],
      admitRate: 0.63
    },
    "Economics": {
      admitGPARange: [3.25, 3.80],
      enrollGPARange: [2.82, 3.41],
      admitRate: 0.76
    },
    "Economics/Administrative Studies": {
      admitGPARange: [2.91, 3.85],
      enrollGPARange: [3.32, 3.93],
      admitRate: 0.58
    },
    "Political Science": {
      admitGPARange: [3.11, 3.78],
      enrollGPARange: [3.08, 3.76],
      admitRate: 0.84
    },
    "Political Science / International Studies": {
      admitGPARange: [3.22, 3.75],
      enrollGPARange: [3.25, 3.56],
      admitRate: 0.74
    },
    "Sociology": {
      admitGPARange: [3.08, 3.73],
      enrollGPARange: [2.90, 3.41],
      admitRate: 0.85
    },
    "Sociology/Administration Studies": {
      admitGPARange: [3.06, 3.79],
      enrollGPARange: [2.93, 3.55],
      admitRate: 0.81
    }
  },
  "UC Santa Barbara": {
    "Environmental Studies": {
      admitGPARange: [3.34, 3.81],
      enrollGPARange: [3.34, 3.75],
      admitRate: 0.74
    },
    "Chicano Studies": {
      admitGPARange: [3.35, 3.81],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.50
    },
    "Feminist Studies": {
      admitGPARange: [3.52, 3.85],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.62
    },
    "Biological Sciences": {
      admitGPARange: [3.46, 3.88],
      enrollGPARange: [3.37, 3.81],
      admitRate: 0.45
    },
    "Actuarial Science": {
      admitGPARange: [3.48, 3.94],
      enrollGPARange: [3.18, 3.85],
      admitRate: 0.78
    },
    "Communication Studies": {
      admitGPARange: [3.41, 3.90],
      enrollGPARange: [3.33, 3.81],
      admitRate: 0.71
    },
    "Computer Science": {
      admitGPARange: [3.93, 4.00],
      enrollGPARange: [3.75, 4.00],
      admitRate: 0.12
    },
    "Chemical Engineering": {
      admitGPARange: [3.61, 3.89],
      enrollGPARange: [3.55, 3.80],
      admitRate: 0.20
    },
    "Computer Engineering": {
      admitGPARange: [3.71, 3.95],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.28
    },
    "Electrical Engineering": {
      admitGPARange: [3.62, 3.97],
      enrollGPARange: [3.74, 3.94],
      admitRate: 0.41
    },
    "Art - Studio": {
      admitGPARange: [3.35, 3.93],
      enrollGPARange: [3.35, 3.88],
      admitRate: 0.79
    },
    "Art History": {
      admitGPARange: [3.48, 3.91],
      enrollGPARange: [3.50, 3.85],
      admitRate: 0.67
    },
    "Film Studies": {
      admitGPARange: [3.46, 3.88],
      enrollGPARange: [3.39, 3.79],
      admitRate: 0.62
    },
    "Music": {
      admitGPARange: [3.44, 3.76],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.38
    },
    "Theater": {
      admitGPARange: [3.41, 3.88],
      enrollGPARange: [3.31, 3.80],
      admitRate: 0.64
    },
    "Japanese": {
      admitGPARange: [3.35, 3.90],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.81
    },
    "Linguistics": {
      admitGPARange: [3.53, 4.00],
      enrollGPARange: [3.24, 3.77],
      admitRate: 0.65
    },
    "Spanish": {
      admitGPARange: [3.49, 3.84],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.75
    },
    "English": {
      admitGPARange: [3.39, 3.89],
      enrollGPARange: [3.29, 3.75],
      admitRate: 0.77
    },
    "History": {
      admitGPARange: [3.50, 3.93],
      enrollGPARange: [3.35, 3.85],
      admitRate: 0.71
    },
    "History of Public Policy and Law": {
      admitGPARange: [3.34, 3.87],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.63
    },
    "Philosophy": {
      admitGPARange: [3.41, 3.90],
      enrollGPARange: [3.09, 3.56],
      admitRate: 0.72
    },
    "Global Studies": {
      admitGPARange: [3.30, 3.89],
      enrollGPARange: [3.28, 3.76],
      admitRate: 0.72
    },
    "Applied Mathematics": {
      admitGPARange: [3.54, 3.94],
      enrollGPARange: [3.36, 4.00],
      admitRate: 0.86
    },
    "Financial Mathematics & Statistics": {
      admitGPARange: [3.57, 3.95],
      enrollGPARange: [3.40, 3.60],
      admitRate: 0.71
    },
    "Mathematics": {
      admitGPARange: [3.49, 3.90],
      enrollGPARange: [3.49, 3.81],
      admitRate: 0.66
    },
    "Statistics and Data Science": {
      admitGPARange: [3.54, 3.94],
      enrollGPARange: [3.26, 3.70],
      admitRate: 0.87
    },
    "Chemistry": {
      admitGPARange: [3.38, 3.88],
      enrollGPARange: [3.31, 3.64],
      admitRate: 0.76
    },
    "Geology": {
      admitGPARange: [3.29, 3.82],
      enrollGPARange: [3.08, 3.56],
      admitRate: 0.66
    },
    "Physics": {
      admitGPARange: [3.72, 4.00],
      enrollGPARange: [3.56, 3.96],
      admitRate: 0.34
    },
    "Biopsychology": {
      admitGPARange: [3.40, 3.88],
      enrollGPARange: [3.36, 3.92],
      admitRate: 0.81
    },
    "Psychological and Brain Science": {
      admitGPARange: [3.39, 3.87],
      enrollGPARange: [3.25, 3.75],
      admitRate: 0.72
    },
    "Anthropology": {
      admitGPARange: [3.30, 3.89],
      enrollGPARange: [3.21, 3.70],
      admitRate: 0.73
    },
    "Economics": {
      admitGPARange: [3.53, 3.92],
      enrollGPARange: [3.44, 3.83],
      admitRate: 0.62
    },
    "Economics and Accounting": {
      admitGPARange: [3.58, 3.94],
      enrollGPARange: [3.39, 3.85],
      admitRate: 0.64
    },
    "Geography": {
      admitGPARange: [3.41, 3.93],
      enrollGPARange: [3.33, 3.61],
      admitRate: 0.67
    },
    "Physical Geography": {
      admitGPARange: [3.25, 3.75],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.83
    },
    "Political Science": {
      admitGPARange: [3.44, 3.91],
      enrollGPARange: [3.24, 3.68],
      admitRate: 0.76
    },
    "Sociology": {
      admitGPARange: [3.43, 3.91],
      enrollGPARange: [3.21, 3.78],
      admitRate: 0.75
    }
  },
  "UC Santa Cruz": {
    "Agroecology": {
      admitGPARange: [3.27, 3.70],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.39
    },
    "Environmental Studies": {
      admitGPARange: [3.20, 3.78],
      enrollGPARange: [3.13, 3.64],
      admitRate: 0.62
    },
    "Women's Studies": {
      admitGPARange: [2.91, 3.73],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.87
    },
    "Biochemistry & Molecular Biology": {
      admitGPARange: [3.22, 3.81],
      enrollGPARange: [2.81, 3.22],
      admitRate: 0.60
    },
    "Biology": {
      admitGPARange: [3.19, 3.71],
      enrollGPARange: [2.82, 3.44],
      admitRate: 0.48
    },
    "Biotechnology": {
      admitGPARange: [3.16, 3.78],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.64
    },
    "Ecology & Evolution": {
      admitGPARange: [3.11, 3.70],
      enrollGPARange: [3.13, 3.65],
      admitRate: 0.72
    },
    "Marine Biology": {
      admitGPARange: [3.09, 3.64],
      enrollGPARange: [2.83, 3.43],
      admitRate: 0.51
    },
    "Molecular, Cell, & Developmental Biology": {
      admitGPARange: [3.30, 3.84],
      enrollGPARange: [3.08, 3.60],
      admitRate: 0.64
    },
    "Neuroscience": {
      admitGPARange: [3.20, 3.76],
      enrollGPARange: [3.17, 3.93],
      admitRate: 0.44
    },
    "Business Management - Economics": {
      admitGPARange: [3.28, 3.87],
      enrollGPARange: [3.05, 3.61],
      admitRate: 0.63
    },
    "Computer Science": {
      admitGPARange: [3.56, 3.93],
      enrollGPARange: [3.33, 3.79],
      admitRate: 0.52
    },
    "Computer Science: Computer Game Design": {
      admitGPARange: [3.18, 3.75],
      enrollGPARange: [3.16, 3.70],
      admitRate: 0.56
    },
    "Education - Credential": {
      admitGPARange: [3.11, 3.87],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.82
    },
    "Education, Democracy, and Justice": {
      admitGPARange: [3.24, 3.84],
      enrollGPARange: [3.32, 3.77],
      admitRate: 0.77
    },
    "Computer Engineering": {
      admitGPARange: [3.29, 3.82],
      enrollGPARange: [3.03, 3.69],
      admitRate: 0.70
    },
    "Electrical Engineering": {
      admitGPARange: [3.29, 3.82],
      enrollGPARange: [3.18, 3.54],
      admitRate: 0.60
    },
    "Robotics Engineering BS": {
      admitGPARange: [3.33, 3.79],
      enrollGPARange: [3.11, 3.68],
      admitRate: 0.51
    },
    "Technology and Information Management": {
      admitGPARange: [3.45, 3.93],
      enrollGPARange: [2.85, 3.44],
      admitRate: 0.55
    },
    "Art": {
      admitGPARange: [3.15, 3.82],
      enrollGPARange: [3.33, 3.88],
      admitRate: 0.82
    },
    "Art and Design: Games and Playable Media": {
      admitGPARange: [3.15, 3.80],
      enrollGPARange: [3.13, 3.78],
      admitRate: 0.47
    },
    "Art History": {
      admitGPARange: [2.98, 3.86],
      enrollGPARange: [2.68, 2.89],
      admitRate: 0.79
    },
    "Film and Digital Media": {
      admitGPARange: [3.20, 3.81],
      enrollGPARange: [2.97, 3.75],
      admitRate: 0.78
    },
    "Music": {
      admitGPARange: [3.13, 3.69],
      enrollGPARange: [2.89, 3.50],
      admitRate: 0.63
    },
    "Theater Arts": {
      admitGPARange: [3.23, 3.79],
      enrollGPARange: [3.10, 3.67],
      admitRate: 0.81
    },
    "Spanish Studies": {
      admitGPARange: [3.15, 3.80],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.78
    },
    "History": {
      admitGPARange: [3.04, 3.85],
      enrollGPARange: [2.79, 3.65],
      admitRate: 0.84
    },
    "Literature": {
      admitGPARange: [3.22, 3.84],
      enrollGPARange: [3.02, 3.67],
      admitRate: 0.83
    },
    "Philosophy": {
      admitGPARange: [2.91, 3.71],
      enrollGPARange: [2.52, 3.30],
      admitRate: 0.81
    },
    "Cognitive Science": {
      admitGPARange: [3.19, 3.80],
      enrollGPARange: [2.79, 3.54],
      admitRate: 0.60
    },
    "Legal Studies": {
      admitGPARange: [3.08, 3.78],
      enrollGPARange: [2.84, 3.33],
      admitRate: 0.77
    },
    "Mathematics": {
      admitGPARange: [3.11, 3.87],
      enrollGPARange: [2.86, 3.25],
      admitRate: 0.81
    },
    "Chemistry": {
      admitGPARange: [3.13, 3.88],
      enrollGPARange: [2.87, 3.77],
      admitRate: 0.57
    },
    "Earth Science": {
      admitGPARange: [3.05, 3.70],
      enrollGPARange: [2.89, 3.46],
      admitRate: 0.91
    },
    "Earth Science/Anthropology": {
      admitGPARange: [3.04, 3.76],
      enrollGPARange: [2.85, 3.70],
      admitRate: 0.90
    },
    "Physics": {
      admitGPARange: [2.97, 3.79],
      enrollGPARange: [3.00, 3.39],
      admitRate: 0.72
    },
    "Psychology": {
      admitGPARange: [3.25, 3.85],
      enrollGPARange: [3.20, 3.78],
      admitRate: 0.50
    },
    "Community Studies": {
      admitGPARange: [3.23, 3.77],
      enrollGPARange: [3.00, 3.58],
      admitRate: 0.82
    },
    "Global and Community Health": {
      admitGPARange: [3.10, 3.76],
      enrollGPARange: [2.91, 3.71],
      admitRate: 0.69
    },
    "Anthropology": {
      admitGPARange: [3.10, 3.74],
      enrollGPARange: [2.79, 3.90],
      admitRate: 0.83
    },
    "Economics": {
      admitGPARange: [3.23, 3.82],
      enrollGPARange: [2.81, 3.47],
      admitRate: 0.77
    },
    "Politics": {
      admitGPARange: [3.12, 3.80],
      enrollGPARange: [3.01, 3.62],
      admitRate: 0.84
    },
    "Sociology": {
      admitGPARange: [3.16, 3.75],
      enrollGPARange: [3.04, 3.58],
      admitRate: 0.76
    },
    "Undeclared": {
      admitGPARange: [3.26, 3.79],
      enrollGPARange: [3.12, 3.74],
      admitRate: 0.48
    }
  },
  "UC San Diego": {
    "Environmental Systems - Ecology, Behavior, Evolution": {
      admitGPARange: [3.53, 3.83],
      enrollGPARange: [3.64, 3.79],
      admitRate: 0.55
    },
    "Real Estate and Development": {
      admitGPARange: [3.47, 3.98],
      enrollGPARange: [3.50, 3.80],
      admitRate: 0.69
    },
    "Ethnic Studies": {
      admitGPARange: [3.28, 3.94],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.61
    },
    "Japanese Studies": {
      admitGPARange: [3.45, 3.86],
      enrollGPARange: [3.07, 3.48],
      admitRate: 0.75
    },
    "Bioengineering - Bioinformatics": {
      admitGPARange: [3.68, 3.93],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.60
    },
    "Biology": {
      admitGPARange: [3.38, 3.86],
      enrollGPARange: [3.28, 3.78],
      admitRate: 0.58
    },
    "Biology - Bioinformatics": {
      admitGPARange: [3.34, 3.80],
      enrollGPARange: [3.09, 3.40],
      admitRate: 0.52
    },
    "Ecology, Behavior & Evolution": {
      admitGPARange: [3.17, 3.74],
      enrollGPARange: [3.21, 3.55],
      admitRate: 0.42
    },
    "Human Biology": {
      admitGPARange: [3.46, 3.90],
      enrollGPARange: [3.34, 3.82],
      admitRate: 0.61
    },
    "Marine Biology": {
      admitGPARange: [3.33, 3.81],
      enrollGPARange: [3.23, 3.80],
      admitRate: 0.40
    },
    "Microbiology": {
      admitGPARange: [3.53, 3.96],
      enrollGPARange: [3.42, 3.91],
      admitRate: 0.59
    },
    "Molecular & Cell Biology": {
      admitGPARange: [3.51, 3.90],
      enrollGPARange: [3.29, 3.81],
      admitRate: 0.72
    },
    "Neurobiology": {
      admitGPARange: [3.43, 3.90],
      enrollGPARange: [3.12, 3.65],
      admitRate: 0.58
    },
    "Business Economics": {
      admitGPARange: [3.58, 3.94],
      enrollGPARange: [3.41, 3.88],
      admitRate: 0.54
    },
    "Communication Arts": {
      admitGPARange: [3.38, 3.90],
      enrollGPARange: [3.27, 3.81],
      admitRate: 0.73
    },
    "Computer Science": {
      admitGPARange: [3.89, 4.00],
      enrollGPARange: [3.86, 4.00],
      admitRate: 0.17
    },
    "Data Science": {
      admitGPARange: [3.73, 4.00],
      enrollGPARange: [3.63, 3.93],
      admitRate: 0.64
    },
    "Education Sciences": {
      admitGPARange: [3.42, 3.82],
      enrollGPARange: [3.34, 3.65],
      admitRate: 0.71
    },
    "Aerospace Engineering": {
      admitGPARange: [3.82, 3.97],
      enrollGPARange: [3.83, 3.97],
      admitRate: 0.26
    },
    "Bioengineering": {
      admitGPARange: [3.87, 3.99],
      enrollGPARange: [3.96, 4.00],
      admitRate: 0.23
    },
    "Bioengineering (Biotech)": {
      admitGPARange: [3.69, 3.92],
      enrollGPARange: [3.67, 3.84],
      admitRate: 0.43
    },
    "Bioengineering: Biosystems": {
      admitGPARange: [3.65, 3.89],
      enrollGPARange: [3.49, 3.80],
      admitRate: 0.65
    },
    "Chemical Engineering": {
      admitGPARange: [3.41, 3.85],
      enrollGPARange: [3.31, 3.70],
      admitRate: 0.44
    },
    "Computer Engineering": {
      admitGPARange: [3.71, 3.95],
      enrollGPARange: [3.66, 3.90],
      admitRate: 0.33
    },
    "Electrical Engineering - BS": {
      admitGPARange: [3.52, 3.93],
      enrollGPARange: [3.41, 3.84],
      admitRate: 0.60
    },
    "Nanoengineering": {
      admitGPARange: [3.33, 4.00],
      enrollGPARange: [3.31, 4.00],
      admitRate: 0.56
    },
    "Structural Engineering": {
      admitGPARange: [3.51, 3.84],
      enrollGPARange: [3.48, 3.75],
      admitRate: 0.44
    },
    "Human Developmental Sciences": {
      admitGPARange: [3.43, 3.80],
      enrollGPARange: [3.36, 3.79],
      admitRate: 0.83
    },
    "Human Developmental Sciences with Specialization in Equity and Diversity": {
      admitGPARange: [3.49, 3.76],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.67
    },
    "Art History/Criticism": {
      admitGPARange: [3.42, 3.88],
      enrollGPARange: [3.31, 3.88],
      admitRate: 0.74
    },
    "Dance": {
      admitGPARange: [3.34, 3.89],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.74
    },
    "Drama": {
      admitGPARange: [3.35, 3.88],
      enrollGPARange: [3.18, 3.77],
      admitRate: 0.62
    },
    "Music": {
      admitGPARange: [3.50, 3.85],
      enrollGPARange: [3.26, 3.72],
      admitRate: 0.73
    },
    "Speculative Design": {
      admitGPARange: [3.57, 3.92],
      enrollGPARange: [3.57, 3.92],
      admitRate: 0.77
    },
    "Studio Art": {
      admitGPARange: [3.32, 3.89],
      enrollGPARange: [3.20, 3.84],
      admitRate: 0.71
    },
    "Visual Arts - Media": {
      admitGPARange: [3.48, 3.91],
      enrollGPARange: [3.29, 3.79],
      admitRate: 0.70
    },
    "History": {
      admitGPARange: [3.46, 3.91],
      enrollGPARange: [3.18, 3.67],
      admitRate: 0.74
    },
    "Literature, English/American": {
      admitGPARange: [3.45, 3.91],
      enrollGPARange: [3.54, 3.77],
      admitRate: 0.71
    },
    "Literature/Writing": {
      admitGPARange: [3.29, 3.84],
      enrollGPARange: [3.14, 3.82],
      admitRate: 0.71
    },
    "Philosophy": {
      admitGPARange: [3.39, 3.91],
      enrollGPARange: [3.12, 3.77],
      admitRate: 0.76
    },
    "World Literature & Cultural Studies": {
      admitGPARange: [3.66, 4.00],
      enrollGPARange: [3.35, 3.87],
      admitRate: 0.53
    },
    "Cognitive and Behavioral Neuroscience": {
      admitGPARange: [3.38, 3.85],
      enrollGPARange: [3.36, 3.83],
      admitRate: 0.62
    },
    "Cognitive Science": {
      admitGPARange: [3.55, 3.91],
      enrollGPARange: [3.48, 3.83],
      admitRate: 0.81
    },
    "Global South Studies": {
      admitGPARange: [3.23, 3.82],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.59
    },
    "Interdisciplinary Computer & the Arts": {
      admitGPARange: [3.50, 3.83],
      enrollGPARange: [3.42, 3.66],
      admitRate: 0.73
    },
    "International Studies - Anthropology": {
      admitGPARange: [3.58, 3.94],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.85
    },
    "International Studies - Economics": {
      admitGPARange: [3.50, 3.87],
      enrollGPARange: [3.41, 3.76],
      admitRate: 0.83
    },
    "International Studies - International Business": {
      admitGPARange: [3.38, 3.85],
      enrollGPARange: [3.25, 3.77],
      admitRate: 0.73
    },
    "International Studies - Linguistics": {
      admitGPARange: [3.30, 3.76],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.75
    },
    "International Studies - Political Science": {
      admitGPARange: [3.25, 3.98],
      enrollGPARange: [3.19, 3.78],
      admitRate: 0.64
    },
    "International Studies - Sociology": {
      admitGPARange: [3.63, 4.00],
      enrollGPARange: [3.94, 4.00],
      admitRate: 0.75
    },
    "Linguistics": {
      admitGPARange: [3.40, 4.00],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.73
    },
    "Mathematics - Computer Science": {
      admitGPARange: [3.55, 3.95],
      enrollGPARange: [3.33, 3.85],
      admitRate: 0.81
    },
    "Applied Mathematics": {
      admitGPARange: [3.60, 3.95],
      enrollGPARange: [3.41, 3.74],
      admitRate: 0.67
    },
    "Mathematics": {
      admitGPARange: [3.48, 3.88],
      enrollGPARange: [3.33, 3.85],
      admitRate: 0.65
    },
    "Mathematics - Applied Science": {
      admitGPARange: [3.58, 3.87],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.75
    },
    "Mathematics/Economics": {
      admitGPARange: [3.60, 4.00],
      enrollGPARange: [2.75, 3.42],
      admitRate: 0.64
    },
    "Probability and Statistics": {
      admitGPARange: [3.68, 3.93],
      enrollGPARange: [3.80, 3.91],
      admitRate: 0.68
    },
    "Chemistry": {
      admitGPARange: [3.48, 3.95],
      enrollGPARange: [3.26, 3.72],
      admitRate: 0.43
    },
    "Chemistry - Biochemistry": {
      admitGPARange: [3.51, 3.90],
      enrollGPARange: [3.45, 3.92],
      admitRate: 0.49
    },
    "Pharmacological Chemistry": {
      admitGPARange: [3.58, 3.90],
      enrollGPARange: [3.55, 3.86],
      admitRate: 0.41
    },
    "Physics": {
      admitGPARange: [3.62, 3.95],
      enrollGPARange: [3.36, 3.84],
      admitRate: 0.51
    },
    "Business Psychology": {
      admitGPARange: [3.30, 3.84],
      enrollGPARange: [3.14, 3.56],
      admitRate: 0.71
    },
    "Psychology": {
      admitGPARange: [3.39, 3.88],
      enrollGPARange: [3.34, 3.84],
      admitRate: 0.71
    },
    "Psychology with a Specialization in Clinical Psychology": {
      admitGPARange: [3.40, 3.84],
      enrollGPARange: [3.37, 3.83],
      admitRate: 0.69
    },
    "Psychology with a Specialization in Cognitive Psychology": {
      admitGPARange: [3.37, 3.92],
      enrollGPARange: [3.56, 3.93],
      admitRate: 0.79
    },
    "Psychology with a Specialization in Developmental Psychology": {
      admitGPARange: [3.23, 3.86],
      enrollGPARange: [3.16, 3.80],
      admitRate: 0.57
    },
    "Psychology with a Specialization in Human Health": {
      admitGPARange: [3.44, 3.87],
      enrollGPARange: [3.39, 3.83],
      admitRate: 0.77
    },
    "Psychology with a Specialization in Social Psychology": {
      admitGPARange: [3.39, 3.86],
      enrollGPARange: [3.33, 3.66],
      admitRate: 0.49
    },
    "Bachelor of Science in Public Health w/ Concentration in Community Health Sciences": {
      admitGPARange: [3.54, 3.83],
      enrollGPARange: [3.54, 3.77],
      admitRate: 0.72
    },
    "Bachelor of Science in Public Health w/ Concentration in Health Policy and Management Sciences": {
      admitGPARange: [3.34, 3.76],
      enrollGPARange: [3.17, 3.57],
      admitRate: 0.73
    },
    "Bachelor of Science in Public Health w/ Concentration in Medicine Sciences": {
      admitGPARange: [3.48, 3.88],
      enrollGPARange: [3.26, 3.74],
      admitRate: 0.74
    },
    "Bachelor of Science in Public Health w/ Concentration in Epidemiology": {
      admitGPARange: [3.32, 3.90],
      enrollGPARange: [3.30, 3.87],
      admitRate: 0.82
    },
    "Global Health": {
      admitGPARange: [3.42, 3.82],
      enrollGPARange: [3.28, 3.78],
      admitRate: 0.86
    },
    "Public Health": {
      admitGPARange: [3.32, 3.85],
      enrollGPARange: [3.23, 3.79],
      admitRate: 0.69
    },
    "Anthropology": {
      admitGPARange: [3.34, 3.79],
      enrollGPARange: [3.18, 3.70],
      admitRate: 0.70
    },
    "Anthropology with Concentration in Climate Change and Human Solutions": {
      admitGPARange: [3.47, 3.82],
      enrollGPARange: [3.33, 3.58],
      admitRate: 0.76
    },
    "Anthropology (Concentration in Sociocultural Anthropology)": {
      admitGPARange: [3.38, 3.91],
      enrollGPARange: [3.13, 3.70],
      admitRate: 0.76
    },
    "Biological Anthropology": {
      admitGPARange: [3.37, 3.76],
      enrollGPARange: [3.37, 3.63],
      admitRate: 0.90
    },
    "Economics": {
      admitGPARange: [3.54, 3.92],
      enrollGPARange: [3.46, 3.88],
      admitRate: 0.65
    },
    "Political Science": {
      admitGPARange: [3.44, 3.91],
      enrollGPARange: [3.20, 3.75],
      admitRate: 0.77
    },
    "Political Science - American Politics": {
      admitGPARange: [3.59, 3.90],
      enrollGPARange: [3.17, 3.90],
      admitRate: 0.84
    },
    "Political Science - International Relations": {
      admitGPARange: [3.42, 3.83],
      enrollGPARange: [3.37, 3.82],
      admitRate: 0.69
    },
    "Political Science - Public Law": {
      admitGPARange: [3.42, 3.90],
      enrollGPARange: [3.19, 3.79],
      admitRate: 0.70
    },
    "Political Science - Public Policy": {
      admitGPARange: [3.46, 3.86],
      enrollGPARange: [3.44, 3.77],
      admitRate: 0.80
    },
    "Political Science / Race, Ethnicity and Politics": {
      admitGPARange: [3.37, 3.91],
      enrollGPARange: [0, 0], // Masked in the data
      admitRate: 0.80
    },
    "Political Science / Data Analytics": {
      admitGPARange: [3.51, 3.88],
      enrollGPARange: [3.29, 3.91],
      admitRate: 0.95
    },
    "Sociology": {
      admitGPARange: [3.42, 3.91],
      enrollGPARange: [3.17, 3.68],
      admitRate: 0.80
    },
    "Sociology - Culture and Communications": {
      admitGPARange: [3.33, 3.87],
      enrollGPARange: [3.24, 3.89],
      admitRate: 0.77
    },
    "Sociology - Economy and Society": {
      admitGPARange: [3.43, 3.83],
      enrollGPARange: [3.47, 3.73],
      admitRate: 0.74
    },
    "Sociology - Law and Society": {
      admitGPARange: [3.27, 3.87],
      enrollGPARange: [3.13, 3.82],
      admitRate: 0.69
    },
    "Sociology - Science and Medicine": {
      admitGPARange: [3.41, 3.89],
      enrollGPARange: [3.34, 3.96],
      admitRate: 0.86
    },
    "Sociology - Social Inequality": {
      admitGPARange: [3.40, 3.86],
      enrollGPARange: [3.28, 3.47],
      admitRate: 0.68
    },
    "Urban Studies & Planning": {
      admitGPARange: [3.33, 3.83],
      enrollGPARange: [3.53, 3.79],
      admitRate: 0.72
    }
  }
};