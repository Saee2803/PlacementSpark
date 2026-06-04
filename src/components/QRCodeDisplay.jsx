import { URLS } from "../config/urls";

export default function QRCodeDisplay() {
  return (
    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
      {/* QR Code Container */}
      <div className="bg-brand-card border-2 border-brand-blue border-opacity-30 p-8 lg:p-10 2xl:p-12 rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center">
        {/* QR Code Image */}
        <div className="mb-6 lg:mb-8 2xl:mb-10">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(URLS.REGISTRATION_FORM)}`}
            alt="QR Code for Registration"
            className="w-48 lg:w-56 2xl:w-64 h-48 lg:h-56 2xl:h-64 border-4 border-brand-white rounded-lg shadow-2xl"
          />
        </div>

        {/* Content Below QR */}
        <div className="text-center">
          <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-brand-white mb-3 lg:mb-4">
            Scan to Register
          </h3>
          <p className="text-sm lg:text-base 2xl:text-lg text-brand-white text-opacity-80 mb-6 lg:mb-8">
            Quick registration using your phone
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
                URLS.showConfigMessage();
                return;
              }
              window.open(URLS.REGISTRATION_FORM, "_blank");
            }}
            className="btn-primary-cta text-sm lg:text-base 2xl:text-lg py-2.5 px-6 lg:py-3 lg:px-8 2xl:py-4 2xl:px-10"
          >
            Or Register Here
          </button>

          {/* Info Text */}
          <p className="text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-60 mt-4 lg:mt-6">
            Limited seats available for next batch
          </p>
        </div>
      </div>
    </div>
  );
}
