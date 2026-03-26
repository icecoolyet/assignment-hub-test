import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Archive, ChevronLeft, Save, Share2 } from 'lucide-react';

interface SubmissionTrackerProps {
  onBack: () => void;
}

export function SubmissionTracker({ onBack }: SubmissionTrackerProps) {
  const students = [
    { id: '64010021', name: 'ปิยบุตร เก่งกาจ', time: '12 ก.ค. 2567, 23:45', status: 'ตรงเวลา', statusColor: 'bg-tertiary/20 text-tertiary', file: 'CS302_HW1.zip', score: 0, initial: 'PK' },
    { id: '64010045', name: 'นวพร ตั้งใจเรียน', time: '13 ก.ค. 2567, 08:12', status: 'ส่งช้า (8 ชม.)', statusColor: 'bg-error/10 text-error', file: 'DB_Draft_Final.pdf', score: 18, initial: 'NT' },
    { id: '64010088', name: 'อลิสา สมบูรณ์', time: '12 ก.ค. 2567, 21:00', status: 'ตรงเวลา', statusColor: 'bg-tertiary/20 text-tertiary', file: 'Submission_Alisa.rar', score: 0, initial: 'AS' },
    { id: '64010112', name: 'วิรัช ขยันดี', time: 'ยังไม่ส่งงาน', status: 'ค้างส่ง', statusColor: 'bg-surface-high text-on-surface-variant', file: '-', score: null, initial: 'WK' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-7xl mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-on-surface-variant hover:text-secondary font-bold text-sm mb-8 transition-colors"
      >
        <ChevronLeft size={20} /> กลับไปที่แดชบอร์ด
      </button>

      <header className="mb-12 ml-4">
        <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Submission Tracker</h1>
        <p className="text-on-surface-variant text-lg font-medium">CS302: ระบบฐานข้อมูลเบื้องต้น - โปรเจกต์รอบที่ 1</p>
      </header>

      <section className="bg-surface-low p-1 rounded-full inline-flex mb-8 ml-4">
        <button className="px-8 py-2.5 rounded-full bg-white text-primary font-bold shadow-sm transition-all">ทั้งหมด</button>
        <button className="px-8 py-2.5 rounded-full text-on-surface-variant font-bold hover:text-primary transition-all">ส่งแล้ว</button>
        <button className="px-8 py-2.5 rounded-full text-on-surface-variant font-bold hover:text-primary transition-all">ยังไม่ส่ง</button>
      </section>

      <div className="bg-white rounded-2xl overflow-hidden editorial-shadow border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-low">
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px]">รหัสนักศึกษา</th>
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px]">ชื่อ-นามสกุล</th>
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px]">เวลาที่ส่ง</th>
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px]">สถานะ</th>
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px]">ไฟล์งาน</th>
                <th className="px-8 py-6 font-bold text-on-surface-variant uppercase tracking-widest text-[10px] text-center">คะแนน (เต็ม 20)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-low">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-surface-low/50 transition-colors">
                  <td className="px-8 py-6 text-sm text-on-surface font-bold">{student.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full academic-gradient flex items-center justify-center text-white font-bold text-[10px]">{student.initial}</div>
                      <span className="text-sm text-on-surface font-bold">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{student.time}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${student.statusColor}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    {student.file !== '-' ? (
                      <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                        <Download size={16} />
                        <span className="text-xs font-bold">{student.file}</span>
                      </button>
                    ) : (
                      <span className="text-xs text-on-surface-variant/30">-</span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-center">
                    <input 
                      className={`w-20 bg-surface-low border-none rounded-xl text-center focus:ring-2 focus:ring-secondary/20 text-sm font-bold py-2 ${student.score === null ? 'opacity-30 cursor-not-allowed' : ''}`} 
                      placeholder="0" 
                      type="number" 
                      defaultValue={student.score || 0}
                      disabled={student.score === null}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-surface-low p-8 rounded-3xl gap-8">
        <div className="flex gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">ส่งแล้ว</span>
            <span className="text-3xl font-extrabold text-primary">3 / 40</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">ค่าเฉลี่ยคะแนน</span>
            <span className="text-3xl font-extrabold text-secondary">18.00</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border border-outline-variant text-on-surface font-bold hover:bg-surface-high transition-all">ยกเลิก</button>
          <button className="px-10 py-4 rounded-full academic-gradient text-white font-bold shadow-lg shadow-primary/20 hover:shadow-xl active:scale-95 transition-all flex items-center gap-2">
            <Save size={20} /> บันทึกคะแนนทั้งหมด
          </button>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40">
        <Share2 size={24} />
      </button>
    </motion.div>
  );
}
