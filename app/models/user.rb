class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
   has_many :tasks, dependent: :destroy
   has_many :teams, through: :members

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Trying to get paths working on heroku
  # http://stackoverflow.com/questions/11534902/ruby-on-rails-app-works-locally-but-does-not-work-on-heroku
  attr_accessible :name, :email, :password, :password_confirmation, :remember_token
end
