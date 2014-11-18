class Task < ActiveRecord::Base
	belongs_to :user
	belongs_to :team
	scope :not_complete, -> {where(complete: false)}

end
