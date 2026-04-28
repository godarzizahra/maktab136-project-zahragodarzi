export default function Login() {
	return (
		<div className="min-h-screen flex items-center justify-center ">
			<div className="w-full max-w-md shadow-lg rounded-2xl p-8">
				<h1 className="text-2xl font-bold text-center mb-6">
					ایجاد حساب کاربری{" "}
				</h1>
				<form className="space-y-4">
					<input
						type="email"
						className="w-full border rounded-md px-3 py-2"
						placeholder="ایمیل "
					/>
					<input
						type="password"
						className="w-full border rounded-md px-3 py-2"
						placeholder="رمز عبور"
					/>
					<button
						type="submit"
						className="w-full bg-black text-white py-2 rounded-md"
					>
						ثبت نام
					</button>
				</form>
				<p className="text-center text-sm mt-4">
					حساب کاربری ندارید؟{" "}
					<a href="/register" className="text-blue-600">
						ثبت نام کنید
					</a>
				</p>
			</div>
		</div>
	);
}
