import React from 'react';
import { motion } from 'motion/react';
import { PlusCircle, UploadCloud, Palette, MousePointer2, FileText, Calendar, GraduationCap } from 'lucide-react';

export function TeacherDashboard({ onViewTracker }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest mb-4 uppercase">Subject Overview</span>
          <h1 className="text-5xl font-extrabold text-primary tracking-tight mb-4 leading-tight">
            CS302 การออกแบบส่วนต่อประสานกับผู้ใช้ (UI Design)
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            ยินดีต้อนรับกลับ อาจารย์สมชาย จัดการแผนการสอนและงานที่มอบหมายของนิสิตได้ในหน้านี้
          </p>
        </div>
        <div className="flex gap-4">
          <div className="p-6 bg-white rounded-2xl editorial-shadow flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-3xl font-extrabold text-primary">24</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">นิสิตทั้งหมด</span>
          </div>
          <div className="p-6 bg-white rounded-2xl editorial-shadow flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-3xl font-extrabold text-secondary">08</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">งานที่ยังเปิดอยู่</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Create Form */}
        <section className="lg:col-span-5">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <PlusCircle size={24} />
              </div>
              <h2 className="text-xl font-bold text-primary">สร้างงานใหม่</h2>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">หัวข้องาน</label>
                <input 
                  className="w-full bg-surface-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all placeholder:text-on-surface-variant/40 text-sm" 
                  placeholder="ระบุชื่อผลงานที่ต้องการมอบหมาย..." 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">รายละเอียดงาน</label>
                <textarea 
                  className="w-full bg-surface-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all placeholder:text-on-surface-variant/40 text-sm resize-none" 
                  placeholder="อธิบายสิ่งที่นิสิตต้องทำและเงื่อนไขการส่ง..." 
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">คะแนนเต็ม</label>
                  <input className="w-full bg-surface-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all text-sm" type="number" defaultValue={10} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">กำหนดส่ง</label>
                  <input className="w-full bg-surface-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all text-sm" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">แนบเอกสาร (PDF, Image)</label>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center bg-surface-low hover:bg-surface-high transition-colors cursor-pointer group">
                  <UploadCloud size={32} className="text-on-surface-variant group-hover:text-secondary transition-colors mb-2" />
                  <span className="text-sm text-on-surface-variant font-bold">ลากไฟล์มาวางหรือคลิกเพื่อเลือกไฟล์</span>
                </div>
              </div>
              <button className="w-full academic-gradient text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                <PlusCircle size={20} />
                สร้างงานใหม่
              </button>
            </form>
          </div>
        </section>

        {/* Right: Assignments List */}
        <section className="lg:col-span-7 space-y-8">
          <div className="relative h-64 rounded-2xl overflow-hidden group editorial-shadow">
            <img 
              src="https://picsum.photos/seed/uidesign/1200/600" 
              alt="UI Design" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-1">Visual Design Essentials</h3>
              <p className="text-white/70 text-sm font-medium">สัปดาห์ที่ 8: สีและทฤษฎีความเปรียบต่างในอินเตอร์เฟซ</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <GraduationCap size={24} className="text-secondary" />
              รายละเอียดงานที่เปิดอยู่
            </h3>
            <button className="text-sm font-bold text-secondary hover:underline underline-offset-4">ดูทั้งหมด</button>
          </div>

          <div className="space-y-6">
            <AssignmentItem 
              title="Assignment 03: Design System & Color Palette"
              desc="ให้นิสิตออกแบบ Design System ขั้นพื้นฐานสำหรับแอปพลิเคชัน Mobile Banking..."
              date="24 ต.ค. 2567"
              score={15}
              status="SUBMITTED (18/24)"
              statusColor="bg-tertiary text-white"
              icon={<Palette size={24} />}
              onClick={onViewTracker}
            />
            <AssignmentItem 
              title="Assignment 02: High-Fidelity Prototyping"
              desc="สร้าง Interactive Prototype โดยใช้ Figma พร้อมทำ Micro-interactions..."
              date="10 ต.ค. 2567"
              score={20}
              status="LATE (2)"
              statusColor="bg-error text-white"
              icon={<MousePointer2 size={24} />}
              onClick={onViewTracker}
            />
            
            <div className="bg-surface-low border-2 border-dashed border-outline-variant/20 p-12 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-on-surface-variant/30 mb-4">
                <FileText size={32} />
              </div>
              <h4 className="text-primary font-bold">ยังไม่มีแบบร่างงาน</h4>
              <p className="text-on-surface-variant text-sm max-w-xs mt-2">คุณสามารถเริ่มสร้างงานใหม่จากฟอร์มด้านซ้ายมือเพื่อมอบหมายงานให้นิสิต</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function AssignmentItem({ title, desc, date, score, status, statusColor, icon, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group flex gap-6 border border-outline-variant/10 cursor-pointer"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-surface-low flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{title}</h4>
            <p className="text-on-surface-variant text-sm mt-1">{desc}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
            {status}
          </span>
        </div>
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-surface-low">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-bold">
            <Calendar size={14} />
            กำหนดส่ง: {date}
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-bold">
            <FileText size={14} />
            {score} คะแนน
          </div>
        </div>
      </div>
    </div>
  );
}
