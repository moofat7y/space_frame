export default function Location() {
  return (
    <div className="rounded-md relative h-100 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29427.819649203884!2d39.0237564412693!3d22.784765694861093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c09690c62b6e99%3A0x7fc82692f06c5776!2sRabigh%2025753%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1717094343685!5m2!1sen!2seg"
        width="100%"
        style={{ border: "0px", aspectRatio: "1227/402", maxHeight: "600px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
