import React from 'react';
import { LogOut, User } from 'lucide-react';

export function Navbar({ userRole, userName, onLogout, onNavigate, currentView }) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <span 
            className="text-xl font-extrabold tracking-tight text-primary cursor-pointer"
            onClick={() => onNavigate(userRole === 'teacher' ? 'teacher-dashboard' : 'student-dashboard')}
          >
            Assignment Hub
          </span>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate(userRole === 'teacher' ? 'teacher-dashboard' : 'student-dashboard')}
              className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
                currentView.includes('dashboard') ? 'text-secondary border-secondary' : 'text-on-surface-variant border-transparent hover:text-secondary'
              }`}
            >
              แดชบอร์ด
            </button>
            <button className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              ช่วยเหลือ
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-3 py-1.5 hover:bg-surface-low rounded-lg transition-all cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">{userName}</p>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                {userRole === 'teacher' ? 'อาจารย์' : 'นักศึกษา'}
              </p>
            </div>
            <div className="w-9 h-9 rounded-full academic-gradient flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="p-2 text-on-surface-variant hover:text-error transition-colors"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-surface-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-bold text-primary text-lg">Assignment Hub</span>
          <p className="text-on-surface-variant text-xs">© 2024 ระบบจัดการการส่งงาน. สงวนลิขสิทธิ์ตามกฎหมาย.</p>
        </div>
        <div className="flex gap-8 text-xs font-semibold text-on-surface-variant">
          <a href="#" className="hover:text-secondary transition-colors">ข้อมูลสถาบัน</a>
          <a href="#" className="hover:text-secondary transition-colors">นโยบายความเป็นส่วนตัว</a>
          <a href="#" className="hover:text-secondary transition-colors">ติดต่อสอบถาม</a>
        </div>
      </div>
    </footer>
  );
}
