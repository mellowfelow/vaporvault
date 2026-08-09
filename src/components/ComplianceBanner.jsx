import { RULES } from '@/config/site';

export default function ComplianceBanner() {
  return (
    <div className="compliance-box">
      <h3>⚠️ {RULES.ageMinimum}+ Only — PACT Act Compliance Notice</h3>
      <p>
        All vaping products on VaporVault are for adults {RULES.ageMinimum} years of age and older only. Adult signature confirmation
        required at delivery. We do not ship to {RULES.restrictedStates.join(', ')}, or other restricted states.
        Age verification required at checkout. PACT Act compliant shipping on every order.
      </p>
    </div>
  );
}
