import React from 'react';
import PersonalInformationSection from './PersonalInformationSection';
import ProfilePhotoSection from './ProfilePhotoSection';

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center my-8">
      {/* Card Content */}
      <div className="w-full max-w-lg mx-auto p-4">
        <ProfilePhotoSection />
        <PersonalInformationSection />
      </div>
    </div>
  );
}
