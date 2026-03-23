import * as React from "react";

type CardProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({title, description, children}) => {
    return (
        <div className="bg-surface-card border border-surface-border rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b border-surface-border">
                <h2 className="text-xl font-semibold tracking-tight text-text-primary">
                    {title}
                </h2>
                {description && (
                    <p className="mt-1 text-sm text-text-secondary">{description}</p>
                )}
            </div>

            <div className="px-6 py-8">
                {children}
            </div>
        </div>
    );
};
