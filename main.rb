require 'sinatra'
require 'sendgrid-ruby'

post '/' do

	@full_name = param["full-name"]
	@email_addy = param["email-addy"]
	@email_addy2 = param["email-add2"]
	@phone = param["phone"]
	@email_body = param["email-body"]
	@pref_email = param["pref-email"]
	@pref_phone = param["'pref-phone"]
	@data_string = [@full_name, @email_addy, @email_addy2, @phone, @email_body]
	@warning = "You must complete all fields to proceed!"

	 def checker
	 	@data_string.each do |input|
	 		if input != undef
	 	    else
	# 	    	display warning
				checker
			end
	def checker2
		if @email_addy == @email_addy2
			sender
		else
			#display warning
		end
	def sender
		from = SendGrid::Email.new(email: @email_addy)
		subject = 'New customer message from ' + @full_name
		to = SendGrid::Email.new(email: 'mercedes.sales.and.inquiries@gmail.com') #pw: jackashotsohamjon
		content = SendGrid::Content.new(type: 'text/plain', value: (@email_body+@pref_email+@pref_phone)
		mail = SendGrid::Mail.new(from, subject, to, content)
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)
		puts response.status_code
		puts response.body
	end
# from = SendGrid::Email.new(email: 'Jacklinton@mac.com')
# subject = 'Hello World from the SendGrid Ruby Library!'
# to = SendGrid::Email.new(email: 'molecles@gmail.com')

# content = SendGrid::Content.new(type: 'text/plain', value: 'Hello, Email!')

# mail = SendGrid::Mail.new(from, subject, to, content)

# sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

# response = sg.client.mail._('send').post(request_body: mail.to_json)

# puts response.status_code
# puts response.body

end

get '/' do


		
		
	erb :index

end
