const data = {
	categories: [
		{
			name: 'Job Applications',
			templates: [
				{
					title: 'Asking for Internship',
					desc: 'Simple template to help you land your first internship',
					subject: 'Internship Application Request',
					variables: [
						{ name: 'name', desc: 'Your name' },
						{ name: 'phone', desc: 'Your active phone number' },
						{ name: 'school', desc: 'Your university/college name' },
						{ name: 'degree', desc: "The degree you're currently pursuing" },
						{
							name: 'recruiter',
							desc: 'The name with salutation of the recruiter. Leave blank if unknown'
						},
						{ name: 'field', desc: 'The field the company works in' }
					],
					options: [
						"Dear %recruiter%,\n\nMy name is %name% and I'm emailing you to ask about potential internship opportunities at your company. I'm currently a student at %school%, studying %degree%. Your company's work on %field% is something I've always been passionate about. I'd appreciate any information you can provide on how to get involved with your company. Please let me know if you have any internships or similiar opportunities available.\n\nYou can reach me via email or through my phone number at %phone%.\n\nThank you so much for your time. I look forward to hearing from you.\n\nRegards,\n%name%",
						"Dear %recruiter%,\n\nMy name is %name% and I'm emailing you to ask about a potential interning opportunity at your company. I'm a recent graduate of %school% and am looking to gain additional experience in my field and learn more about the industry. I think your company could offer me the guidance to be able to excel in this field. I'd appreciate any information you can provide about your internship opportunities.\n\nYou can reach me via email or through my phone number at %phone%.\n\nThank you for your time and I look forward to hearing from you.\n\nRegards,\n%name%"
					]
				},
				{
					title: 'Job Applications',
					desc: 'Profesional job application email template',
					subject: '%job% Job Application - %name%',
					variables: [
						{ name: 'name', desc: 'Your name' },
						{ name: 'phone', desc: 'Your active phone number' },
						{ name: 'school', desc: 'Your university/college name' },
						{ name: 'degree', desc: 'Your qualifications' },
						{ name: 'job', desc: 'The position you are applying for' },
						{
							name: 'recruiter',
							desc: 'The name with salutation of the recruiter. Leave blank if unknown'
						},
						{ name: 'field', desc: 'The field the company works in' },
						{ name: 'exp', desc: 'Years of experience in this field' },
						{ name: 'source', desc: 'Where did you find out about this opening' },
						{ name: 'skills', desc: 'Your most relevant skills for the job, separated by a comma' }
					],
					options: [
						"Dear %recruiter%,\n\nI discovered the open %job% position through %source% and feel that I would be a good fit for the role after reading the job description and requirements.\n\nI have recently graduated from %school% with a degree in %degree%. I am eager to put my knowledge & experience I've gained from university in a well-establish company such as yours.\n\nI have attached my resume & cover letter for your consideration. Please reach out if you would like additional information or to set up an interview. You can reach me through email or my phone at %phone%.\n\nThank you so much for your time and consideration and I look forward to hearing from you soon.\n\nSincerely,\n%name%",
						"Dear %recruiter%,\n\nRecently, I found the %job% job opening through %source%.After reviewing the position's requirements and qualifications, I am confident that my abilities, education, and experience makes me the best candidate for this position.\n\nI hold a degree in %degree% from %school% and have over %exp% years of experience in this field. Some of the skills I have which makes me a suitable candidate for this role are %skills%.\n\nI have attached my resume and cover letter for your review. Please contact me for additional documents or more information regarding my qualifications or experience.\n\nThank you for your time and your consideration. I look forward to hearing from you soon.\n\nRegards,\n%name%\n%phone%"
					]
				},
				{
					title: 'Connect with a Recruiter',
					desc: 'Foolproof email to approach a recruiters and hiring managers',
					subject: 'Internship Application Request',
					variables: []
				}
			]
		},
		{
			name: 'Interviewing',
			templates: [
				{
					title: 'Respond to Interview Request',
					desc: "How to respond to an employer's request for an interview.",
					subject: 'Response to interview request',
					variable: [],
					questions: []
				}
			]
		},
		{
			name: 'Follow Ups',
			templates: []
		},
		{
			name: 'The Final Decision',
			templates: []
		}
	]
};

export const get = async () => {
	return {
		status: 200,
		body: data
	};
};
