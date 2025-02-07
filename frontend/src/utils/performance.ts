export const measurePerformance = (metric: string) => {
  if ('performance' in window) {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      // Time to first byte
      ttfb: navigationTiming.responseStart - navigationTiming.requestStart,
      // DOM Content Loaded
      dcl: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
      // Load Complete
      loadComplete: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
    };

    console.log(`Performance Metric - ${metric}:`, metrics[metric as keyof typeof metrics]);
    return metrics[metric as keyof typeof metrics];
  }
  return null;
}; 