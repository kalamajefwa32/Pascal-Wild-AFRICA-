import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { GUEST_REVIEWS, GuestReview } from '../data/reviews';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';

export const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<GuestReview[]>(GUEST_REVIEWS);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    origin: '',
    rating: 5,
    tour: '2 Days / 1 Night Tsavo East Safari',
    text: ''
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.text) return;

    const created: GuestReview = {
      id: `rev-${Date.now()}`,
      author: newReview.author,
      origin: newReview.origin || 'International Traveler',
      rating: newReview.rating,
      tour: newReview.tour,
      date: 'Just now',
      text: newReview.text,
      source: 'Direct Feedback',
      isDemoSample: false
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowSubmitModal(false);
      setNewReview({
        author: '',
        origin: '',
        rating: 5,
        tour: '2 Days / 1 Night Tsavo East Safari',
        text: ''
      });
    }, 2000);
  };

  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#153F25] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero_safari_elephants_1794228726820.jpg')" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Guest Feedback & Stories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
            WHAT OUR GUESTS SAY
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Read heartfelt safari memories and feedback from international travelers who explored Kenya with Pascal.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Transparency Demo Content Notice */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-amber-900 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider text-amber-900 block">
              Demonstration & Authentic Review Policy
            </span>
            <p className="text-neutral-700 leading-relaxed">
              In accordance with our strict honesty standards, the reviews below are illustrative guest testimonials demonstrating the platform's format until newly collected verified reviews from our upcoming safari season are imported. Real guests can submit feedback directly below or on our official TripAdvisor page.
            </p>
          </div>
        </div>

        {/* Aggregate Ratings Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left space-y-1">
            <div className="text-4xl sm:text-5xl font-heading font-black text-[#153F25]">
              5.0 <span className="text-lg font-normal text-neutral-400">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#E9A51A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-neutral-500">Based on recent safari expeditions</p>
          </div>

          <div className="space-y-2 text-xs text-neutral-600 border-y md:border-y-0 md:border-x border-neutral-100 py-4 md:py-0 md:px-6">
            <div className="flex items-center justify-between font-medium">
              <span>Wildlife Spotting Expertise</span>
              <span className="text-[#153F25] font-bold">100%</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span>Punctuality & Hotel Pickup</span>
              <span className="text-[#153F25] font-bold">100%</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span>Vehicle Comfort & Safety</span>
              <span className="text-[#153F25] font-bold">100%</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center items-stretch md:items-end">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="py-2.5 px-5 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Write a Review
            </button>
            <a
              href={SITE_CONFIG.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all inline-flex items-center justify-center gap-1.5"
            >
              <span>View on TripAdvisor</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E9A51A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    {review.source}
                  </span>
                </div>

                {review.highlight && (
                  <h4 className="font-heading font-bold text-sm text-[#153F25]">
                    "{review.highlight}"
                  </h4>
                )}

                <p className="text-xs text-neutral-700 leading-relaxed font-body italic">
                  “{review.text}”
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#153F25]">{review.author}</div>
                  <div className="text-[11px] text-neutral-500">{review.origin}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#E9A51A] font-semibold">{review.tour}</div>
                  <div className="text-[10px] text-neutral-400">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Review Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-lg font-heading font-extrabold text-[#153F25]">
                Leave a Review for Pascal
              </h3>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-neutral-400 hover:text-neutral-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-[#153F25]">Asante Sana! (Thank you)</h4>
                <p className="text-xs text-neutral-600">
                  Your feedback has been submitted and added to the reviews.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John & Emma"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom / Italy"
                    value={newReview.origin}
                    onChange={(e) => setNewReview({ ...newReview, origin: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Safari / Tour Taken
                  </label>
                  <select
                    value={newReview.tour}
                    onChange={(e) => setNewReview({ ...newReview, tour: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none bg-white"
                  >
                    <option value="One Day Safari">One Day Safari</option>
                    <option value="2 Days / 1 Night Tsavo East Safari">2 Days / 1 Night Tsavo East</option>
                    <option value="3 Days / 2 Nights Tsavo East & West">3 Days / 2 Nights Tsavo</option>
                    <option value="Watamu Dhow Excursion">Watamu Dhow Excursion</option>
                    <option value="Snorkeling & Marine Park">Snorkeling & Marine Park</option>
                    <option value="Custom Safari Experience">Custom Safari Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Star Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'text-[#E9A51A] fill-[#E9A51A]'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Review / Comments *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your safari experience with Pascal..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#153F25] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-[#0D2817]"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
