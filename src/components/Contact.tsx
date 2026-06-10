import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, ArrowRight, User, Calendar, Users, FileText } from 'lucide-react';

interface ContactProps {
  preselectedPackageName: string;
}

export default function Contact({ preselectedPackageName }: ContactProps) {
  // Form values
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [message, setMessage] = useState('');

  // Validations & success triggers
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any>(null);

  // Pre-populate if package is selected
  useEffect(() => {
    if (preselectedPackageName) {
      setEventType(preselectedPackageName);
      setMessage(`Hi Panipuri Express! I'd love to enquire regarding the "${preselectedPackageName}" package details for my upcoming event.`);
    }
  }, [preselectedPackageName]);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!fullName.trim()) tempErrors.fullName = "Full Name is required";
    
    // Simple phone regex
    const phoneTrim = phoneNumber.trim();
    if (!phoneTrim) {
      tempErrors.phoneNumber = "Phone Number is required";
    } else if (phoneTrim.length < 8) {
      tempErrors.phoneNumber = "Enter a valid phone number";
    }

    // Simple email regex
    const emailTrim = email.trim();
    if (!emailTrim) {
      tempErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(emailTrim)) {
      tempErrors.email = "Enter a valid email address";
    }

    if (!eventType) tempErrors.eventType = "Please select an Event Type";
    if (!eventDate) tempErrors.eventDate = "Please choose an Event Date";
    
    const count = parseInt(guestCount);
    if (!guestCount.trim()) {
      tempErrors.guestCount = "Guest Count is required";
    } else if (isNaN(count) || count <= 0) {
      tempErrors.guestCount = "Guest count must be greater than 0";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Assemble submitted summary
      const inquirySummary = {
        fullName,
        phoneNumber,
        email,
        eventType,
        eventDate,
        guestCount,
        message,
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setSubmittedInquiry(inquirySummary);
      setShowSuccessModal(true);

      // Reset fields
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setEventType('');
      setEventDate('');
      setGuestCount('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Book Panipuri Express <span className="text-primary italic">Today</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            Fill our quick quotation builder or chat directly over WhatsApp to configure authentic experiences for your guests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates details & Mock Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Channels Cards */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 space-y-6">
              <h3 className="text-xl font-bold text-secondary font-serif border-b border-gray-100 pb-4">
                Booking Office Contacts
              </h3>
              
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-orange-100/60 text-primary flex items-center justify-center rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Call Operations</h4>
                    <a href="tel:+919876543210" className="text-sm sm:text-base font-bold text-secondary hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-teal-100/60 text-secondary flex items-center justify-center rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">General Enquiries</h4>
                    <a href="mailto:hello@panipuriexpress.com" className="text-sm sm:text-base font-bold text-secondary hover:text-primary transition-colors">
                      hello@panipuriexpress.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-yellow-100/60 text-accent flex items-center justify-center rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Headquarters</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      14/B Premium Gourmet Complex, S.G. Highway, Ahmedabad, Gujarat, India - 380054
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gray-100 text-gray-500 flex items-center justify-center rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Operation Hours</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      Daily: 09:00 AM - 09:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp CTA */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Panipuri%20Express%20team%20I%20am%20interested%20in%20inquiring%20about%20your%20live%20food%20catering%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-white py-3.5 rounded-2xl block text-center font-bold text-sm tracking-wide transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2"
                  id="whatsapp-chat-trigger"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat Directly over WhatsApp
                </a>
              </div>
            </div>

            {/* Stylized Google Map Frame */}
            <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-xl border border-stone-800 h-64 relative flex flex-col justify-between p-6">
              {/* Map Layout Mock Background */}
              <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-stone-800" />
              
              {/* Center pointer locator symbol */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* blinking shock wave circle */}
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary/45 opacity-75" />
                  <span className="relative flex items-center justify-center rounded-full h-8 w-8 bg-primary text-white shadow-lg border-2 border-white font-extrabold focus:outline-none">
                    <MapPin className="w-4 h-4 fill-white" />
                  </span>
                </div>
              </div>

              {/* Map Header details */}
              <div className="z-10 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/5 max-w-[280px]">
                <h5 className="text-white text-xs font-bold leading-tight uppercase font-mono text-accent">Panipuri Express HQ Location</h5>
                <p className="text-[10px] text-gray-300 leading-normal mt-0.5 font-sans">14/B Premium Gourmet Complex, Ahmedabad, Gujarat</p>
              </div>

              {/* Maps indicator footer links */}
              <div className="z-10 flex justify-between items-center bg-black/65 backdrop-blur-md px-3 py-2 rounded-xl text-[10px] font-medium text-gray-300 border border-white/5">
                <span>Latitude: 23.0225° N | Longitude: 72.5714° E</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline font-bold"
                >
                  Get Route
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-250/30">
              
              <h3 className="text-2xl font-bold font-serif text-secondary mb-2">
                Send Booking Inquiry
              </h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed font-sans">
                Tell us about your estimated guest headcount and date. Our event planner will reach out within 24 hours with custom recommendations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" id="quote-request-form">
                
                {/* Full name input */}
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-primary" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="E.g., Thanuj Galla"
                    className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                      errors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                    }`}
                    id="form-full-name"
                  />
                  {errors.fullName && (
                    <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Contacts row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone input */}
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="E.g., +91 98765 43210"
                      className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                        errors.phoneNumber ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                      }`}
                      id="form-phone"
                    />
                    {errors.phoneNumber && (
                      <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>

                  {/* Email input */}
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-primary" /> Email Address
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E.g., user@example.com"
                      className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                      }`}
                      id="form-email"
                    />
                    {errors.email && (
                      <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* Event particulars row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Event Type select */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                        errors.eventType ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                      }`}
                      id="form-event-type"
                    >
                      <option value="">-- Choose Type --</option>
                      <option value="Wedding Event">Wedding Event</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Private Birthday">Private Birthday</option>
                      <option value="Live Station Only">Live Station Setup</option>
                      <option value="Custom Gastronomy">Custom Package</option>
                      <option value="Classic Street Express">Classic Street Express</option>
                      <option value="Royal Celebration Fountain">Royal Celebration Fountain</option>
                      <option value="The Imperial Street Carnival">The Imperial Street Carnival</option>
                    </select>
                    {errors.eventType && (
                      <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                        {errors.eventType}
                      </span>
                    )}
                  </div>

                  {/* Event Date input */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> Event Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                        errors.eventDate ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                      }`}
                      id="form-event-date"
                    />
                    {errors.eventDate && (
                      <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                        {errors.eventDate}
                      </span>
                    )}
                  </div>

                  {/* Guest count input */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary" /> Guest Count
                    </label>
                    <input
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="E.g., 250"
                      className={`w-full p-4 border rounded-xl outline-none text-sm transition-all bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                        errors.guestCount ? 'border-rose-500 focus:border-rose-500' : 'border-gray-200 focus:border-primary'
                      }`}
                      id="form-guest-count"
                    />
                    {errors.guestCount && (
                      <span className="text-rose-500 text-xs font-bold mt-1.5 block font-sans">
                        {errors.guestCount}
                      </span>
                    )}
                  </div>

                </div>

                {/* Inquiry text message */}
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 font-mono flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-primary" /> Specific Requirements & Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let us know if you require organic leaf containers, vegan menu variants, specific water options, or spice levels..."
                    className="w-full p-4 border border-gray-200 rounded-xl outline-none text-sm bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    id="form-message"
                  />
                </div>

                {/* Quote submission trigger */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-base tracking-wide transition-all duration-300 transform active:scale-98 shadow-lg shadow-primary/25 cursor-pointer flex items-center justify-center gap-2"
                  id="form-submit-trigger"
                >
                  Request Customized Quote
                  <ArrowRight className="w-5 h-5" />
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Success Confirmation Modal */}
      {showSuccessModal && submittedInquiry && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-md"
          id="success-modal-overlay"
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl border border-gray-100 text-center relative"
            id="success-modal-body"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary font-serif mb-2">Quote Requested Successfully!</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              Thank you, <strong>{submittedInquiry.fullName}</strong>. We have registered your temporary reservation token. An operations manager is already mapping your date.
            </p>

            {/* Structured details overview */}
            <div className="bg-gray-50 p-4 rounded-2xl text-left border border-gray-100 space-y-2 mb-6 font-mono text-xs text-gray-600">
              <div className="flex justify-between pb-1.5 border-b border-gray-200/60 font-bold text-secondary">
                <span>Inquiry ID:</span>
                <span>{submittedInquiry.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Event Selected:</span>
                <span className="text-secondary font-bold truncate max-w-[170px]">{submittedInquiry.eventType}</span>
              </div>
              <div className="flex justify-between">
                <span>Scheduled Date:</span>
                <span className="text-secondary font-bold">{submittedInquiry.eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Headcount:</span>
                <span className="text-secondary font-bold">{submittedInquiry.guestCount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span>Registered Email:</span>
                <span className="text-secondary font-bold truncate max-w-[180px]">{submittedInquiry.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Registered Phone:</span>
                <span className="text-secondary font-bold">{submittedInquiry.phoneNumber}</span>
              </div>
              <div className="flex justify-between pt-1 pb-1 text-[10px] text-gray-400">
                <span>Timestamp:</span>
                <span>{submittedInquiry.submittedAt}</span>
              </div>
            </div>

            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-secondary hover:bg-teal-950 text-white font-bold py-3 px-6 rounded-xl transition-all cursor-pointer text-sm"
              id="success-modal-redirect-btn"
            >
              Done & Return Website
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
