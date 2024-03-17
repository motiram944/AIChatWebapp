export function containsVisualizationKeywords(input) {
  const keywords = [
    "data",
    "visualization",
    "chart",
    "graph",
    "plot",
    "diagram",
    "charts",
  ];

  // Convert input to lowercase for case-insensitive matching
  const lowerInput = input?.toLowerCase();

  // Check if any keyword exists in the input
  return keywords?.some((keyword) => lowerInput?.includes(keyword));
}
