const ScrollingBar = () => {
  return (
    <div className="fixed top-0 z-50 w-full h-8 bg-gray-900 bg-opacity-70 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white flex items-center justify-center overflow-hidden backdrop-blur-md">
      <p className="whitespace-nowrap animate-scroll">
        Current Event: <i>AI Workshop on Devin (22 March 2024)</i> | Past
        Events: AI Seminar (10 March 2024) | Machine Learning Bootcamp (1
        January 2024) | Deep Learning Webinar (12 November 2023)
      </p>
    </div>
  );
};

export default ScrollingBar;
