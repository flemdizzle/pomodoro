# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Task.destroy_all

Task.create!([
	{task: "Making Code", updated_at: "2014-11-15 20:34:03"},
	{task: "Expo Markers", updated_at: "2014-11-15 20:34:03"},
	{task: "Ginger Bread", updated_at: "2014-11-15 20:34:03"},
	{task: "Making Code", updated_at: "2014-11-15 20:34:03"},
	{task: "Expo Markers", updated_at: "2014-11-15 20:34:03"},
	{task: "Ginger Bread", updated_at: "2014-11-15 20:34:03"},
	])