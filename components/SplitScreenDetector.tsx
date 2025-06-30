'use client';
import { useEffect, useState } from 'react';

export function SplitScreenDetector() {
  const [isSplitScreen, setIsSplitScreen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkSplitScreen = () => {
      if (dismissed) return;

      const deviceWidth = window.screen.width;
      const windowWidth = window.innerWidth;
      const deviceHeight = window.screen.height;
      const windowHeight = window.innerHeight;

      const widthRatio = windowWidth / deviceWidth;
      const heightRatio = windowHeight / deviceHeight;

      const isTabletDevice = deviceWidth >= 768 || deviceHeight >= 768;
      const isConstrainedWindow = windowWidth < 768 || windowHeight < 600;

      const isProbablySplitScreen =
        (isTabletDevice && isConstrainedWindow && (widthRatio < 0.7 || heightRatio < 0.7)) ||
        (deviceWidth >= 1024 && windowWidth < 800) ||
        (window.innerWidth < window.outerWidth * 0.8);

      setIsSplitScreen(isProbablySplitScreen);

      // 🔒 Prevent scrolling when modal is active
      if (isProbablySplitScreen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    const timeoutId = setTimeout(checkSplitScreen, 100);

    window.addEventListener('resize', checkSplitScreen);
    window.addEventListener('orientationchange', () => {
      setTimeout(checkSplitScreen, 500);
    });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkSplitScreen);
      window.removeEventListener('orientationchange', checkSplitScreen);
      // ✅ Ensure scroll is restored
      document.body.style.overflow = '';
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setIsSplitScreen(false);
    // ✅ Restore scroll on dismiss
    document.body.style.overflow = '';
  };

  if (!isSplitScreen || dismissed) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-6">
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-2xl font-bold mb-4 text-rose-400">
          Better Experience Available
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          This website is optimized for full-screen viewing. For the best experience, please:
        </p>
        <ul className="text-left text-gray-300 mb-6 space-y-2">
          <li className="flex items-center">
            <span className="text-rose-400 mr-2">•</span>
            Exit split-screen mode
          </li>
          <li className="flex items-center">
            <span className="text-rose-400 mr-2">•</span>
            Use full-screen browser
          </li>
          <li className="flex items-center">
            <span className="text-rose-400 mr-2">•</span>
            Rotate to landscape (if on tablet)
          </li>
        </ul>
        <div className="space-y-3">
          <button 
            onClick={handleDismiss}
            className="w-full px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-medium"
          >
            Continue Anyway
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-600 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
