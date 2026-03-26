import * as React from "react";

export const RoomDeclarator: React.FC = () => {
    return (
        <div className="p-5 space-y-4">
            <div>
                <div className="text-2xl font-bold text-text-primary">Creer nouvelle piece</div>
                <div className="text-text-secondary text-sm">Merci de renseigner toutes les informations necessaires
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="room-name" className="font-medium text-text-primary">
                    Nom de la piece
                </label>
                <input
                    id="room-name"
                    type="text"
                    placeholder="Ex: Salle de reunion"
                    className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 text-sm text-text-primary shadow-sm transition-colors placeholder:text-text-secondary/70 focus:border-uni-green focus:outline-none focus:ring-2 focus:ring-uni-green/30"
                />
            </div>

            <div className="flex items-end justify-end">
                <button
                    className="cursor-pointer bg-uni-green px-4 py-3 text-white rounded-xl font-medium hover:bg-uni-green-dark transition-colors">
                    Valider
                </button>
            </div>
        </div>
    );
};
