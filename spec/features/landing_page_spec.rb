require "rails_helper"

describe "landing page", js: true do
  it "should have a timer" do
    visit '/'
    expect(page).to have_css('div', text: 'START!')
  end
end

describe "landing page", js: true do
  it 'should have a task numbers' do
    visit '/'
    expect(page).to have_content('total number of tasks')
  end
end

describe "landing page", js: true do
  it "should contain log in" do
    visit '/'
    expect(page).to have_link('sign in')
  end
end


describe "landing page", js: true do
  it 'should contain sign up' do
    visit '/'
    expect(page).to have_link('sign up')
  end
end


# testing the landing page to see if all buttons, links, and css are present on the page.
