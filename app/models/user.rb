class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
   has_many :tasks, dependent: :destroy
   has_many :teams

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
