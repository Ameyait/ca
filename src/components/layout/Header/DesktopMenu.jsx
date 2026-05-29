import Link from "next/link";
import { ChevronDown } from "lucide-react";
 
export default function DesktopMenu({ menu }) {
  return (
    <nav className="flex gap-8">
      {menu.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
        >
          <div className="group inline-block">
 
            {/* Menu Button */}
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
 
            {/* Dropdown */}
            {item.children && (
              <div
                className="absolute right-0 top-full mt-1 w-[260px] hidden group-hover:block"
              >
                <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 rounded-xl transition-colors duration-200 hover:bg-white hover:text-[#0e7490] "
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
                  ))}
                </div>
              </div>
            )}
 
          </div>
        </div>
      ))}
    </nav>
  );
}
 