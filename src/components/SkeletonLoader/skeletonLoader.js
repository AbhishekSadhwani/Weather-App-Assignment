import React from "react";
import "./skeletonLoader.css";

export const SkeletonLoader = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-header"></div>
            <div className="skeleton-temp"></div>
            <div className="skeleton-info"></div>
            <div className="skeleton-week">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="skeleton-day"></div>
                ))}
            </div>
        </div>
    );
};

