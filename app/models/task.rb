class Task < ActiveRecord::Base
  validates :task, presence: true
	belongs_to :user
	belongs_to :team
	scope :not_complete, -> {where(complete: false)}
	scope :complete, -> {where(complete: true)}


end
