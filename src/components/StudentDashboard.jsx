import React from 'react';
import { motion } from 'motion/react';
import { Send, CloudUpload, FileText, CheckCircle2, X, Download } from 'lucide-react';

export function StudentDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <header className="mb-12 ml-4 md:ml-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-2">สวัสดี, สมชาย</h1>
        <p className="text-on-surface-variant text-lg font-medium">มาเริ่มจัดการงานวิชาการของคุณในวันนี้กันเถอะ</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Task List */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-primary">รายการงานของฉัน</h2>
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">4 งานคงค้าง</span>
          </div>

          <div className="space-y-6">
            <TaskCard 
              title="การวิเคราะห์อัลกอริทึมพื้นฐาน (Lab 4)"
              subject="Computer Science 101 • ผู้สอน: ดร. วิภาวี"
              status="งานที่ต้องทำ"
              statusColor="bg-secondary/10 text-secondary"
              accentColor="bg-secondary"
              timeLabel="เหลือเวลาอีก"
              timeValue="02:14:45"
              isActive
            />
            <TaskCard 
              title="ออกแบบฐานข้อมูลเชิงสัมพันธ์"
              subject="Database Systems • ผู้สอน: อ. สมเกียรติ"
              status="งานที่ต้องทำ"
              statusColor="bg-secondary/10 text-secondary"
              accentColor="bg-secondary"
              timeLabel="กำหนดส่ง"
              timeValue="พรุ่งนี้, 18:00"
            />
            <TaskCard 
              title="รายงานความก้าวหน้าโครงงาน"
              subject="Senior Project • ผู้สอน: คณะกรรมการ"
              status="ส่งแล้ว"
              statusColor="bg-tertiary/10 text-tertiary"
              accentColor="bg-tertiary"
              isCompleted
            />
          </div>
        </section>

        {/* Right: Submission Panel */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24 bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">หน้าส่งงาน</h2>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-low hover:bg-surface-high transition-colors">
                <X size={20} className="text-on-surface-variant" />
              </button>
            </div>

            <div className="mb-8 p-6 bg-surface-low rounded-2xl">
              <h3 className="text-lg font-bold text-primary mb-2">โครงสร้างข้อมูลแบบต้นไม้ (Assignment 3)</h3>
              <p className="text-sm text-on-surface-variant font-medium mb-6">
                กรุณาเขียนโค้ดภาษา Java เพื่อแสดงการทำงานของ Binary Search Tree และจัดทำรายงานสรุปผลการทดลองในรูปแบบ PDF
              </p>
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">เอกสารประกอบ</p>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl group cursor-pointer hover:bg-surface-high transition-all border border-outline-variant/10">
                  <FileText size={18} className="text-secondary" />
                  <span className="text-sm font-bold text-primary">Instruction_A3.pdf</span>
                  <Download size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="mb-8 text-center p-6 border-2 border-dashed border-secondary/20 rounded-2xl bg-secondary/5">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">ระยะเวลาที่เหลือ</p>
              <p className="text-4xl font-extrabold text-secondary tracking-tighter">02:14:45</p>
            </div>

            <div className="relative group cursor-pointer mb-8">
              <div className="border-2 border-dashed border-outline-variant rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all group-hover:border-secondary group-hover:bg-secondary/5">
                <CloudUpload size={40} className="text-on-surface-variant mb-3 group-hover:text-secondary transition-colors" />
                <p className="text-sm font-bold text-primary">ลากไฟล์มาวางที่นี่ หรือคลิกเพื่อเลือกไฟล์</p>
                <p className="text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-widest">รองรับไฟล์ PDF, Word, Zip (สูงสุด 50MB)</p>
              </div>
              <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
            </div>

            <button className="w-full py-4 px-8 rounded-full academic-gradient text-white font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-3">
              <Send size={20} />
              ยืนยันการส่งงาน
            </button>
            <p className="text-center text-[10px] font-bold text-on-surface-variant mt-4 uppercase tracking-widest">การส่งงานจะได้รับการประทับเวลาอย่างเป็นทางการ</p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function TaskCard({ title, subject, status, statusColor, accentColor, timeLabel, timeValue, isActive, isCompleted }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden border border-outline-variant/10 ${isActive ? 'ring-2 ring-secondary/20' : ''}`}>
      <div className={`absolute top-0 left-0 w-1.5 h-full ${accentColor}`}></div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${statusColor}`}>
            {status}
          </span>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-on-surface-variant text-sm font-medium">{subject}</p>
        </div>
        
        {isCompleted ? (
          <div className="flex items-center gap-2 text-tertiary font-bold">
            <CheckCircle2 size={20} />
            <span>ตรวจสอบแล้ว</span>
          </div>
        ) : (
          <div className="flex flex-col items-end justify-center bg-surface-low px-4 py-2 rounded-xl min-w-[140px]">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{timeLabel}</span>
            <span className="text-lg font-extrabold text-secondary">{timeValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}
