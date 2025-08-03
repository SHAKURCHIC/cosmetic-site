import React from "react";

export default function TeamBlock({ team = [] }) {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#B69E7B] text-center">
                Наша команда
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#EDE2CF] flex flex-col items-center text-center p-6"
                    >
                        <img
                            src={member.photo}
                            alt={`${member.firstName} ${member.lastName}`}
                            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#EDE2CF]"
                        />
                        <h3 className="text-lg font-semibold text-[#3B3227]">
                            {member.lastName} {member.firstName} {member.middleName}
                        </h3>
                        <p className="text-sm text-[#B69E7B] mt-1">{member.specialty}</p>
                        <p className="text-sm text-[#3B3227] mt-2">Опыт: {member.experience} лет</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
