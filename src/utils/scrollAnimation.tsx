
import { useEffect } from "react";

export const initScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("show");
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Add event listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
};
