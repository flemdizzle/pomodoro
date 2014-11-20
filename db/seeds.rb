# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
def task_gen
  return Faker::Commerce.product_name
end

def time_gen
  return Faker::Time.backward(7, :day)
end

def combine_task_and_date(complete_status, amount)
  output =[]
  amount.times do
    output << {task: "#{task_gen}", updated_at: "#{time_gen}", complete: complete_status}
  end
  return output
end

Task.destroy_all

Task.create!(combine_task_and_date(true, 50))
Task.create!(combine_task_and_date(false, 7))




