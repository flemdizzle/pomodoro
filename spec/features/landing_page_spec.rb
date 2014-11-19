require "rails_helper"

describe "landing page", js: true do
  it "should have a timer" do
    visit '/'
    expect(page).to have_css('div', text: 'START!')
  end
end

describe "landing page", js: true do
  it "should have launch modal" do
    visit '/'
    expect(page).to have_button("Launch modal")
  end
end


describe "landing page", js: true do
  it "should contain log in" do
    visit '/'
    expect(page).to have_link("sign in")
  end
end
