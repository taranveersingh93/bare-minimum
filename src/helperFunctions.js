const formatCategories = (category) => {
  const replacements = {
    'exercise': 'Exercise',
    'health': 'Health',
    'work': 'Work',
    'mentalCare': 'Mental Care',
    'cleaning': 'Cleaning',
    'organization': 'Organization'
  }
  return replacements[category]
}

export default formatCategories;
