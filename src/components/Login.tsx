import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight, Chrome, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'teacher' | 'student') => void;
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl academic-gradient text-white mb-6 editorial-shadow">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Assignment Hub</h1>
          <p className="text-on-surface-variant font-medium">ระบบจัดการการส่งงาน เพื่อประสิทธิภาพการเรียนรู้</p>
        </div>

        <div className="bg-white rounded-2xl editorial-shadow p-8 sm:p-10 border border-outline-variant/10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-on-surface mb-1">เข้าสู่ระบบ</h2>
            <p className="text-on-surface-variant text-sm">กรุณากรอกข้อมูลเพื่อเข้าถึงบัญชีผู้ใช้ของคุณ</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">ชื่อผู้ใช้งาน / อีเมล</label>
              <input 
                type="text" 
                placeholder="example@university.ac.th"
                className="w-full px-4 py-4 bg-surface-low border-none rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">รหัสผ่าน</label>
                <button className="text-xs font-bold text-secondary hover:underline">ลืมรหัสผ่าน?</button>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-4 bg-surface-low border-none rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" id="remember" />
              <label htmlFor="remember" className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">จดจำการใช้งาน</label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => onLogin('teacher')}
                className="w-full academic-gradient text-white py-4 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                อาจารย์ <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onLogin('student')}
                className="w-full bg-secondary text-white py-4 rounded-full font-bold text-sm shadow-lg shadow-secondary/20 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                นักศึกษา <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-surface-low flex flex-col items-center">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">หรือเข้าสู่ระบบด้วย</p>
            <div className="flex gap-4 w-full">
              <button className="flex-1 flex items-center justify-center py-3 px-4 bg-surface-low border border-outline-variant/20 rounded-xl hover:bg-surface-high transition-colors group">
                <Chrome size={18} className="mr-2 text-on-surface-variant group-hover:text-primary" />
                <span className="text-sm font-bold text-on-surface">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center py-3 px-4 bg-surface-low border border-outline-variant/20 rounded-xl hover:bg-surface-high transition-colors group">
                <ShieldCheck size={18} className="mr-2 text-on-surface-variant group-hover:text-secondary" />
                <span className="text-sm font-bold text-on-surface">SSO มหาลัย</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <a href="#" className="hover:text-secondary transition-colors">เงื่อนไขการใช้งาน</a>
          <a href="#" className="hover:text-secondary transition-colors">นโยบายความเป็นส่วนตัว</a>
          <a href="#" className="hover:text-secondary transition-colors">ติดต่อสอบถาม</a>
        </div>
      </motion.div>
    </div>
  );
}
