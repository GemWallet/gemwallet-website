import React, { FC } from "react";

export interface CardProps {
  name: string;
  description: string;
  // Should be imported from: @heroicons/react/24/outline
  icon?: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
    }
  ) => JSX.Element;
}

export const Card: FC<CardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div className="pt-6">
      <div className="flow-root rounded-lg bg-cyan-900 border-slate-100 border px-6 pb-8 h-full">
        <div className="-mt-6">
          {Icon ? (
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
          ) : null}
          <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
            {name}
          </h3>
          <p className="mt-5 text-base text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};
