require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

post '/' do

	@full_name = params["full-name"]
	@email_addy = params["email-addy"]
	@email_addy2 = params["email-add2"]
	@phone = params["phone"]
	@email_body = params["email-body"]
	@pref_email = params["pref-email"]
	@pref_phone = params["'pref-phone"]
	@data_string = [@full_name, @email_addy, @email_addy2, @phone, @email_body]
	@warning = "You must complete all fields to proceed!"

	#  def checker
	#  	@data_string.each do |input|
	#  		if input != nil
	#  	    else
	# # 	    	display warning
	# 			checker
	# 		end
	# 	end
	# 	checker2
	# end
	# def checker2
	# 	if @email_addy == @email_addy2
	# 		sender
	# 	else
	# 		#display warning
	# 		checker2
	# 	end
	# end
	# def sender
		from = SendGrid::Email.new(email: @email_addy)
		subject = 'New customer message from ' + @full_name
		to = SendGrid::Email.new(email: 'mercedes.sales.and.inquiries@gmail.com') #pw: jackashotsohamjon
		content = SendGrid::Content.new(type: 'text/plain', value: @email_body)
		mail = SendGrid::Mail.new(from, subject, to, content)
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)
		puts response.status_code
		puts response.body
# 	end
end

get '/' do


		
		
	erb :index

end
