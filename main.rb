require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

post '/' do

	@full_name = params["full-name"]
	@email_addy = params["email-addy"]
	@email_addy2 = params["email-addy2"]
	@phone = "Customer phone: " + params["phone"]
	@email_body = params["email-body"]
	#@pref_email = params["pref-email"]
	#@pref_phone = params["pref-phone"]
	

	if params["pref-email"] == 'on'
		@pref_email = 'Prefers email communication.'
	end
	if params["pref-phone"] == 'on'
		@pref_phone = 'Prefers phone communication.'
	end

	@data_string = [@phone, @pref_phone, @pref_email, @email_body].join(", ")

		from = SendGrid::Email.new(email: @email_addy)
		subject = 'New customer message from ' + @full_name
		to = SendGrid::Email.new(email: 'mercedes.sales.and.inquiries@gmail.com') #pw: jackashotsohamjon
		content = SendGrid::Content.new(type: 'text/plain', value: @data_string)
		mail = SendGrid::Mail.new(from, subject, to, content)
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)
		puts response.status_code
		puts response.body
	
end


get	"/" do

	@time = Time.now.strftime("%H").to_i

	@myclass = "myClass"

	erb :home
end

get	"/gallery" do
	erb :gallery
end

get	"/about_us" do
	erb :about
end

get	"/contact_us" do
	erb :contact
end
