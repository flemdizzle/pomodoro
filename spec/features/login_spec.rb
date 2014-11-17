# Write loging capybara here
require 'spec_helper'

describe 'user signs up ' do
  it 'user should go to Welcome to Pomodoro App' do

    within("#session") do
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'password', :with => 'password'
      click_button('sign in')
    end
  end
end


describe 'user creates taks' do
  it 'should take user to task listing' do
  end
end

describe ' user log in and out' do
  it 'should take user to the welcome page' do
  end
end


describe 'user can use timer' do
  it ' user can only have timer to 25 minutes'do
  end
end
