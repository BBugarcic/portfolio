class StaticPagesController < ApplicationController
  def index
  end

  def thank_you
    @name = params[:name]
    @surname = params[:surname]
    @email = params[:email]
    @message = params[:message]
    ActionMailer::Base.mail(:from => @email,
    :to => '2bjswebdev@gmail.com',
    :subject => "A new contact form message from #{@name} #{@surname}",
    :body => @message).deliver_now
  end
end
