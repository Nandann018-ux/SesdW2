#!/usr/bin/env node
import { CliEngine } from './src/cli_engine/CliEngine';
import { GreetCommand } from './src/commands/GreetCommand';
import { AddCommand } from './src/commands/AddCommand';
import { FileInfoCommand } from './src/commands/FileInfoCommand';
import { SysInfoCommand } from './src/commands/SysInfoCommand';
import { Base64EncodeCommand } from './src/commands/Base64EncodeCommand';
import { Base64DecodeCommand } from './src/commands/Base64DecodeCommand';
import { HashCommand } from './src/commands/HashCommand';
import { GithubCommand } from './src/commands/GithubCommand';
import { WeatherCommand } from './src/commands/WeatherCommand';
import { QuoteCommand } from './src/commands/QuoteCommand';

const app = new CliEngine();

// Register Local Commands
app.registerCommand(new GreetCommand());
app.registerCommand(new AddCommand());
app.registerCommand(new FileInfoCommand());
app.registerCommand(new SysInfoCommand());
app.registerCommand(new Base64EncodeCommand());
app.registerCommand(new Base64DecodeCommand());
app.registerCommand(new HashCommand());

// Register API Commands
app.registerCommand(new GithubCommand());
app.registerCommand(new WeatherCommand());
app.registerCommand(new QuoteCommand());

// Run the application
app.run();