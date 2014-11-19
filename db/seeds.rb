# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

tasks = []
dates = []

100.times do
  tasks << Faker::Commerce.product_name
end

100.times do
  dates << Faker::Date.backward(14)
end


Task.destroy_all

Task.create!([

	{task: "Making Code", updated_at: "2014-11-15 20:34:03"},
	{task: "Expo Markers", updated_at: "2014-11-15 20:34:03"},
	{task: "Ginger Bread", updated_at: "2014-11-15 20:34:03"},
	{task: "Making Code", updated_at: "2014-11-15 20:34:03"},
	{task: "Expo Markers", updated_at: "2014-11-15 20:34:03"},
	{task: "Ginger Bread", updated_at: "2014-11-15 20:34:03"},
	{task: "Write User Stories", updated_at: dates.sample, complete: true },
  {task: "Catch up on emails", updated_at: dates.sample, complete: true},
  {task: "User can log in", updated_at: dates.sample, complete: true },
  {task: "Create ERD", updated_at: dates.sample, complete: true },
  {task: "Complete Wireframes", updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true },
  {task: tasks.sample, updated_at: dates.sample, complete: true }

  ])


50.times do
Task.create!([{task: tasks.sample, updated_at: dates.sample, complete: true }])
end


