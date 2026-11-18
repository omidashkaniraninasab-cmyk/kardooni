"use client";
import Header from "@/components/layout/Header";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* بک‌گراند دودی نارنجی */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-80"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      />
      {/* گرادیان تیره برای خوانایی */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header activePage="CONTACT" />
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-32 pb-16 relative">
          
          {/* نوار عمودی نورانی وسط صفحه - فقط در دسکتاپ */}
          <div 
            className="hidden lg:block absolute left-1/2 top-32 bottom-16 w-[1px] -translate-x-1/2 z-10"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
              boxShadow: "0 0 15px rgba(255,255,255,0.3)"
            }}
          />

          {/* استفاده از order در موبایل */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* اطلاعات تماس: در دسکتاپ اول، در موبایل دوم */}
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
            
            {/* فرم: در دسکتاپ دوم، در موبایل اول */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}