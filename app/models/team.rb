class Team < ActiveRecord::Base
has_many :users, through: :members
has_many :tasks
end
