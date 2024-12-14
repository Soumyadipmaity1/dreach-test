import React from "react";

const ServiceMain: React.FC = () => {
	return (
		<main className={`servi-base`}>
			<div className={`servi-banner`}>
				<div>
					<h1 className={`text-4xl font-bold`}>Services we offer</h1>
					<p className={`text-base pt-4`}>
						Healthcare made accessible, convenient, and comprehensive
					</p>
				</div>
			</div>
			<div className={`mt-2 p-5 sm:p-6 md:p-8 lg:p-12`}>
				<p className={`text-center lg:px-24`}>
					At Dr. Reach, we strive to make healthcare more accessible,
					convenient, and comprehensive for patients. Whether you need a
					doctor's appointment, lab test, pharmacy order, or home care, our
					platform connects you with healthcare professionals quickly and
					efficiently.
				</p>
			</div>
		</main>
	);
};

export default ServiceMain;
