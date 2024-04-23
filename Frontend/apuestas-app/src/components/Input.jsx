export default function Input({ type, placeholder }) {
    return (
        <input type={type} className="bg-gray-900 px-5 py-2 outline-none rounded-lg" placeholder={placeholder} />
    );
};
