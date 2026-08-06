import React from "react";
import { ArrowRight } from "lucide-react";

export interface MediaCardProps {
  title: string;
  imageUrl: string; 
  description?: string | null;
  badge?: React.ReactNode; 
  subtitle?: React.ReactNode;
  footerText?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClick?: () => void;
  className?: string;
}

export function MediaCard({
  title,
  imageUrl,
  description,
  badge,
  subtitle,
  footerText,
  actionLabel,
  onAction,
  onClick,
  className = "",
}: MediaCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-4 right-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
            {badge}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-6 p-6 sm:p-8">
        <div className="space-y-3">
          {subtitle && (
            <div className="flex items-center space-x-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {subtitle}
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {title}
          </h2>

          {description && (
            <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>

        {(footerText ?? actionLabel) && (
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
              {footerText}
            </span>
            {actionLabel && (
              <button
                type="button"
                onClick={(e) => {
                  if (onAction) {
                    e.stopPropagation();
                    onAction();
                  }
                }}
                className="flex items-center space-x-2 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400"
              >
                <span>{actionLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
