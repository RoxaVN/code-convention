import lint from "@commitlint/lint";
import {
	RuleConfigSeverity,
	type RuleConfigCondition,
	type TargetCaseType,
} from "@commitlint/types";

async function main() {
	const result = await lint(process.argv[2], {
		"body-leading-blank": [RuleConfigSeverity.Warning, "always"] as const,
		"body-max-line-length": [RuleConfigSeverity.Error, "always", 100] as const,
		"footer-leading-blank": [RuleConfigSeverity.Warning, "always"] as const,
		"footer-max-line-length": [
			RuleConfigSeverity.Error,
			"always",
			100,
		] as const,
		"header-max-length": [RuleConfigSeverity.Error, "always", 100] as const,
		"header-trim": [RuleConfigSeverity.Error, "always"] as const,
		"subject-case": [
			RuleConfigSeverity.Error,
			"never",
			["sentence-case", "start-case", "pascal-case", "upper-case"],
		] as [RuleConfigSeverity, RuleConfigCondition, TargetCaseType[]],
		"subject-empty": [RuleConfigSeverity.Error, "never"] as const,
		"subject-full-stop": [RuleConfigSeverity.Error, "never", "."] as const,
		"type-case": [RuleConfigSeverity.Error, "always", "lower-case"] as const,
		"type-empty": [RuleConfigSeverity.Error, "never"] as const,
		"type-enum": [
			RuleConfigSeverity.Error,
			"always",
			[
				"build",
				"chore",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
			],
		] as [RuleConfigSeverity, RuleConfigCondition, string[]],
	});
	if (!result.valid) {
		const errors = [...result.errors, ...result.warnings]
			.map((e) => ` - ${e.name}: ${e.message}`)
			.join("\n");
		console.error(`Commit message errors:\n${errors}`);
		console.log();
		process.exitCode = 1;
	}
}

main();
