import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopMenu({ menu }) {
  return (
    <nav className="flex gap-8">
      {menu.map((item, index) => (
        <div key={index} className="relative group flex flex-col items-center">
          <button className="flex items-center gap-1 text-sm font-medium text-text-primary pb-2 leading-none">
            <span className="flex items-center">
              {item.title}
            </span>
            {item.children && (
              <ChevronDown
                size={14}
                className="mt-[1px] transition-transform duration-300 group-hover:rotate-180"
              />
            )}
          </button>
          {item.children && (
            <div className="absolute left-0 top-full h-4 w-full"></div>
          )}
          {item.children && (
            <div
              className="absolute right-0 top-full w-[260px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50"
            >
              <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3">
                {item.children.map((child, i) => {
                  const Icon = child.icon;
                  return (
                    <Link
                      key={i}
                      href={child.href}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 rounded-xl transition-colors duration-200 hover:bg-white hover:text-[#0e7490]"
                    >
                      {child.icon && (
                        <child.icon
                          size={18}
                          className="text-[#0e7490] transition-colors duration-200"
                        />
                      )}

                      <span className="transition-colors duration-200">
                        {child.title}
                      </span>
                    </Link>
                  );
                })}

              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}